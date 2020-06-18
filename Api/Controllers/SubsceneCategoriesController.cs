using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.SubsceneCategoryCommands;
using Application.DTO.SubsceneCategoryDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubsceneCategoriesController : ControllerBase
    {
        protected readonly IAddSubsceneCategoryCommand _addSubsceneCategory;
        protected readonly IGetSubsceneCategoryCommand _getSubsceneCategory;
        protected readonly IGetSubsceneCategoriesCommand _getSubsceneCategories;
        protected readonly IEditSubsceneCategoryCommand _editSubsceneCategory;
        protected readonly IDeleteSubsceneCategoryCommand _deleteSubsceneCategory;

        public SubsceneCategoriesController(IAddSubsceneCategoryCommand addSubsceneCategory,
            IGetSubsceneCategoryCommand getSubsceneCategory,
            IGetSubsceneCategoriesCommand getSubsceneCategories,
            IEditSubsceneCategoryCommand editSubsceneCategory, 
            IDeleteSubsceneCategoryCommand deleteSubsceneCategory)
        {
            _addSubsceneCategory = addSubsceneCategory;
            _getSubsceneCategory = getSubsceneCategory;
            _getSubsceneCategories = getSubsceneCategories;
            _editSubsceneCategory = editSubsceneCategory;
            _deleteSubsceneCategory = deleteSubsceneCategory;
        }

        // GET: api/SubsceneCategories
        [HttpGet]
        public IActionResult Get([FromQuery] SubsceneCategoryQuery query)
        {
            try
            {
                var subsceneCategories = _getSubsceneCategories.Execute(query);
                return Ok(subsceneCategories);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/SubsceneCategories/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var subsceneCategory = _getSubsceneCategory.Execute(id);
                return Ok(subsceneCategory);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/SubsceneCategories
        [HttpPost]
        public IActionResult Post([FromBody] SubsceneCategoryDto dto)
        {
            try
            {
                _addSubsceneCategory.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/SubsceneCategories/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] SubsceneCategoryDto dto)
        {
            try
            {
                dto.Id = id;
                _editSubsceneCategory.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
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
                _deleteSubsceneCategory.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
