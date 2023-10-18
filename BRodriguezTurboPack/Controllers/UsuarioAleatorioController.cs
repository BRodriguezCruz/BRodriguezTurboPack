using Microsoft.AspNetCore.Mvc;

namespace BRodriguezTurboPack.Controllers
{
    public class UsuarioAleatorioController : Controller
    {
        public IActionResult GetAll()
        {
            return View();
        }
    }
}
