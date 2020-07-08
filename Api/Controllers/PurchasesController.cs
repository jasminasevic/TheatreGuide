using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Commands.PurchaseCommands;
using Application.DTO.PurchaseDto;
using Application.Exceptions;
using Application.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        protected readonly IAddPurchaseCommand _addPurchase;
        protected readonly IGetPurchaseCommand _getPurchase;
        protected readonly IGetPurchasesCommand _getPurchases;
        protected readonly IEditPurchaseCommand _editPurchase;
        protected readonly IDeletePurchaseCommand _deletePurchase;

        public PurchasesController(IAddPurchaseCommand addPurchase,
            IGetPurchaseCommand getPurchase,
            IGetPurchasesCommand getPurchases,
            IEditPurchaseCommand editPurchase, 
            IDeletePurchaseCommand deletePurchase)
        {
            _addPurchase = addPurchase;
            _getPurchase = getPurchase;
            _getPurchases = getPurchases;
            _editPurchase = editPurchase;
            _deletePurchase = deletePurchase;
        }


        // GET: api/Purchases
        [HttpGet]
        public IActionResult Get([FromQuery] PurchaseQuery query)
        {
            try
            {
                var purchases = _getPurchases.Execute(query);
                return Ok(purchases);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // GET: api/Purchases/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                var purchase = _getPurchase.Execute(id);
                return Ok(purchase);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // POST: api/Purchases
        [HttpPost]
        public IActionResult Post([FromForm] PurchaseDto dto)
        {
            try
            {
                _addPurchase.Execute(dto);
                return Ok();
            }
            catch(EntityAlreadyExistsException e)
            {
                return StatusCode(422, e.Message);
            }
        }

        // PUT: api/Purchases/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] PurchaseDto dto)
        {
            try
            {
                dto.Id = id;
                _editPurchase.Execute(dto);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _deletePurchase.Execute(id);
                return StatusCode(204);
            }
            catch(EntityNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }
    }
}
