using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.PurchaseCommands;
using Application.UseCase;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class PurchasesController : ControllerBase
    {
        protected readonly IAddPurchaseCommand _addPurchase;
        protected readonly IGetPurchaseCommand _getPurchase;
        protected readonly IGetPurchasesCommand _getPurchases;
        protected readonly IEditPurchaseCommand _editPurchase;
        protected readonly IDeletePurchaseCommand _deletePurchase;
        protected readonly IGetPurchasesFilteredByTheatreCommand _getPurchasesFilteredByTheatre;
        protected readonly UseCaseExecutor _executor;

        public PurchasesController(IAddPurchaseCommand addPurchase,
            IGetPurchaseCommand getPurchase,
            IGetPurchasesCommand getPurchases,
            IEditPurchaseCommand editPurchase,
            IDeletePurchaseCommand deletePurchase,
            IGetPurchasesFilteredByTheatreCommand getPurchasesFilteredByTheatre,
            UseCaseExecutor executor)
        {
            _addPurchase = addPurchase;
            _getPurchase = getPurchase;
            _getPurchases = getPurchases;
            _editPurchase = editPurchase;
            _deletePurchase = deletePurchase;
            _getPurchasesFilteredByTheatre = getPurchasesFilteredByTheatre;
            _executor = executor;
        }


        // GET: api/Purchases
        [HttpGet]
        public IActionResult Get([FromQuery] PurchaseQuery query)
        {
            if(query.Type == "purchasesFilteredByTheatre")
            {
                var purchasesFilteredByTheatre = _executor.ExecuteQuery(_getPurchasesFilteredByTheatre, query);
                return Ok(purchasesFilteredByTheatre);
            }
            var purchases = _executor.ExecuteQuery(_getPurchases, query);
            return Ok(purchases);
        }

        // GET: api/Purchases/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var purchase = _executor.ExecuteQuery(_getPurchase, id);
            return Ok(purchase);
        }

        // POST: api/Purchases
        [HttpPost]
        public IActionResult Post([FromBody] PurchaseDto dto)
        {
            _executor.ExecuteCommand(_addPurchase, dto);
            return Ok();
        }

        // PUT: api/Purchases/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] PurchaseDto dto)
        {
            dto.Id = id;
            _executor.ExecuteCommand(_editPurchase, dto);
            return StatusCode(204);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _executor.ExecuteCommand(_deletePurchase, id);
            return StatusCode(204);
        }
    }
}
