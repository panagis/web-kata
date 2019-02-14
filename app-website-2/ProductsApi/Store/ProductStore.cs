using System.Collections.Generic;
using System.Linq;
using ProductsApi.Model;

namespace ProductsApi.Store
{
    public class ProductStore
    {
        private readonly List<Product> _mProducts;

        public ProductStore()
        {
            _mProducts = new List<Product>
            {
                new Product("SQL Source Control", "Source control your SQL Server databases.")
            };
        }

        public IEnumerable<Product> GetAll()
        {
            return _mProducts;
        }

        public Product GetByName(string name)
        {
            return _mProducts.Exists(p => p.Name == name) ? _mProducts.Single(p => p.Name == name) : null;
        }

        public bool Update(Product p) {
            var product = GetByName(p.Name);
            if (product == null) {
                return false;
            }
            _mProducts.Remove(product);
            Add(p);

            return true;
        }

        public void Add(Product product)
        {
            _mProducts.Add(product);
        }

        public void Delete(string name) {
            var product = GetByName(name);
            if (product != null) {
                _mProducts.Remove(product);
            }
        }
    }
}
