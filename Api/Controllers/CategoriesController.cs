
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.CategoryCommands;
using Application.DTO.CategoryDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        protected readonly IAddCategoryCommand _addCategory;
        protected readonly IGetCategoriesCommand _getCategories;
        protected readonly IGetCategoryCommand _getCategory;
        protected readonly IEditCategoryCommand _editCategory;
        protected readonly IDeleteCategoryCommand _deleteCategory;

        public CategoriesController(IAddCategoryCommand addCategory,
            IGetCategoriesCommand getCategories,
            IGetCategoryCommand getCategory,
            IEditCategoryCommand editCategory, 
            IDeleteCategoryCommand deleteCategory)
        {
            _addCategory = addCategory;
            _getCategories = getCategories;
            _getCategory = getCategory;
            _editCategory = editCategory;
            _deleteCategory = deleteCategory;
        }

        // GET: api/Categories
        [HttpGet]
        public IActionResult Get([FromQuery] CategoryQuery query)
        {
            try
            {
                var categories = _getCategories.Execute(query);
                return Ok(categories);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var category = _getCategory.Execute(id);
                return Ok(category);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Categories
        [HttpPost]
        public IActionResult Post([FromBody] CategoryDto dto)
        {
            try
            {
                _addCategory.Execute(dto);
                return Ok();
            }
            catch (EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Categories/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] CategoryDto dto)
        {
            try
            {
                dto.Id = id;
                _editCategory.Execute(dto);
                return StatusCode(204);
            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deleteCategory.Execute(id);
                return StatusCode(204);

            }
            catch (EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
