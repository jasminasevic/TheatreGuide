using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.SceneCommands;
using Application.Core;
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
        protected readonly IGetSceneWithShowsCommand _getSceneWithShows;
        protected readonly IGetScenesCommand _getScenes;
        protected readonly IDeleteSceneCommand _deleteScene;
        protected readonly IEditSceneCommand _editScene;
        protected readonly IGetScenesListCommand _getScenesList;
        protected readonly IGetScenesTheatreCommand _getScenesTheatre;
        protected readonly UseCaseExecutor _executor;

        public ScenesController(IAddSceneCommand addScene,
            IGetSceneCommand getScene,
            IGetScenesCommand getScenes,
            IDeleteSceneCommand deleteScene,
            IEditSceneCommand editScene,
            IGetScenesListCommand getScenesList,
            IGetScenesTheatreCommand getScenesTheatre,
            IGetSceneWithShowsCommand getSceneWithShows, 
            UseCaseExecutor executor)
        {
            _addScene = addScene;
            _getScene = getScene;
            _getScenes = getScenes;
            _deleteScene = deleteScene;
            _editScene = editScene;
            _getScenesList = getScenesList;
            _getScenesTheatre = getScenesTheatre;
            _getSceneWithShows = getSceneWithShows;
            _executor = executor;
        }

        // GET: api/Scenes
        [HttpGet]
        public IActionResult Get([FromQuery] SceneQuery query)
       {
            if (query.TheatreId != 0)
            {
                var scenesInTheatre = _executor.ExecuteQuery(_getScenesTheatre, query);
                return Ok(scenesInTheatre);
            }

            if (query.SearchQuery == null && query.PageNumber == 0 && query.PerPage == 0)
            {
                var sceneList = _executor.ExecuteQuery(_getScenesList, new SearchQuery());
                return Ok(sceneList);
            }

            var scenes = _executor.ExecuteQuery(_getScenes, query);
            return Ok(scenes);
        }

        // GET: api/Scenes/5
        [HttpGet("{id}")]
        public IActionResult Get(int id, [FromQuery] SearchQuery query)
        {
            if (query.Type == "sceneWithShows")
            {
                var sceneWithShows = _executor.ExecuteQuery(_getSceneWithShows, id);
                return Ok(sceneWithShows);
            }
            var scene = _executor.ExecuteQuery(_getScene, id);
            return Ok(scene);
        }

        // POST: api/Scenes
        [HttpPost]
        public IActionResult Post([FromForm] SceneDto dto)
        {
            _executor.ExecuteCommand(_addScene, dto);
            return Ok();
        }

        // PUT: api/Scenes/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] SceneDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editScene, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deleteScene, id);
            return StatusCode(204);
        }
    }
}
