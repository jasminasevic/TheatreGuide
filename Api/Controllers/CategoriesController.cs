
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.CategoryCommands;
using Application.UseCase;
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
        protected readonly IGetCategoriesListCommand _getCategoriesList;
        protected readonly UseCaseExecutor _executor;

        public CategoriesController(IAddCategoryCommand addCategory,
            IGetCategoriesCommand getCategories,
            IGetCategoryCommand getCategory,
            IEditCategoryCommand editCategory,
            IDeleteCategoryCommand deleteCategory,
            IGetCategoriesListCommand getCategoriesList, 
            UseCaseExecutor executor)
        {
            _addCategory = addCategory;
            _getCategories = getCategories;
            _getCategory = getCategory;
            _editCategory = editCategory;
            _deleteCategory = deleteCategory;
            _getCategoriesList = getCategoriesList;
            _executor = executor;
        }

        // GET: api/Categories
        [HttpGet]
        public IActionResult Get([FromQuery] CategoryQuery query)
        {
            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var categoryList = _executor.ExecuteQuery(_getCategoriesList, new SearchQuery());
                return Ok(categoryList);
            }

            var categories = _executor.ExecuteQuery(_getCategories, query);
            return Ok(categories);
        }

        // GET: api/Categories/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var category = _executor.ExecuteQuery(_getCategory, id);
            return Ok(category);
        }

        // POST: api/Categories
        [HttpPost]
        public IActionResult Post([FromBody] CategoryDto dto)
        {
            _executor.ExecuteCommand(_addCategory, dto);
            return Ok();
        }

        // PUT: api/Categories/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] CategoryDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editCategory, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteCategory, id);
            return StatusCode(204);
        }
    }
}
