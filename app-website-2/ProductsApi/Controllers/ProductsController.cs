using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Model;
using ProductsApi.Store;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    [Route("api/[controller]/{name}")]
    public class ProductsController : Controller
    {
        private readonly ProductStore _mProductStore;

        public ProductsController(ProductStore productStore)
        {
            _mProductStore = productStore;
        }

        [HttpGet]
        public IActionResult Get(string name)
        {
            if (name == null) {
                return Ok(_mProductStore.GetAll());
            }

            if (String.IsNullOrWhiteSpace(name)) {
                return StatusCode(StatusCodes.Status404NotFound, name);
            }

            var product =_mProductStore.GetByName(name);
            return product == null ? StatusCode(StatusCodes.Status404NotFound, name) : Ok(product);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Product value)
        {
            if (String.IsNullOrWhiteSpace(value.Name)) {
                return StatusCode(StatusCodes.Status404NotFound, value);
            }

            if (_mProductStore.GetByName(value.Name) != null) {
                return StatusCode(StatusCodes.Status409Conflict, value);
            }

            _mProductStore.Add(value);

            return Created("api/Products", value);
        }

        [HttpDelete]
        public IActionResult Delete(string name)
        {
             if (String.IsNullOrWhiteSpace(name) || _mProductStore.GetByName(name) == null) {
                return StatusCode(StatusCodes.Status404NotFound, name);
            }

            _mProductStore.Delete(name);

            return Ok(name);
        }

    }
}
