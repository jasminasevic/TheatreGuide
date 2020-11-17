using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.SceneCommands;
using Application.DTO.SceneDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScenesController : ControllerBase
    {

        protected readonly IAddSceneCommand _addScene;
        protected readonly IGetSceneCommand _getScene;
        protected readonly IGetScenesCommand _getScenes;
        protected readonly IDeleteSceneCommand _deleteScene;
        protected readonly IEditSceneCommand _editScene;

        public ScenesController(IAddSceneCommand addScene,
            IGetSceneCommand getScene,
            IGetScenesCommand getScenes,
            IDeleteSceneCommand deleteScene, 
            IEditSceneCommand editScene)
        {
            _addScene = addScene;
            _getScene = getScene;
            _getScenes = getScenes;
            _deleteScene = deleteScene;
            _editScene = editScene;
        }

        // GET: api/Scenes
        [HttpGet]
        public IActionResult Get([FromQuery] SceneQuery query)
       {
            try
            {
                var scenes = _getScenes.Execute(query);
                return Ok(scenes);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Scenes/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var scene = _getScene.Execute(id);
                return Ok(scene);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Scenes
        [HttpPost]
        public IActionResult Post([FromForm] SceneDto dto)
        {
            try
            {
                _addScene.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Scenes/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SceneDto dto)
        {
            try
            {
                dto.Id = id;
                _editScene.Execute(dto);
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
                _deleteScene.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
