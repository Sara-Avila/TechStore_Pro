import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
  <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
    <Navbar />

    
    
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Tarjeta 1 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://m.media-amazon.com/images/I/71FCuLyHEPL._AC_UF894,1000_QL80_.jpg" className="rounded-lg" />
    <h3 className="font-bold text-lg">Mouse Inalámbrico</h3>
    <p className="text-texto-dim text-sm">Mouse ergonómico, conexión Bluetooth</p>
    <p className="text-verde font-extrabold">$89.900</p>
  </div>

  {/* Tarjeta 2 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://www.tecnotienda.com.co/wp-content/uploads/2025/07/TECLADO-MECANICO-REDRAGON-K616-FIZZ-RGB-BLANCO-ROSA-4.webp" className="rounded-lg" />
    <h3 className="font-bold text-lg">Teclado Mecánico</h3>
    <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
    <p className="text-verde font-extrabold">$149.900</p>
  </div>

  {/* Tarjeta 3 */}
  <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
    <img src="https://mexx-img-2019.s3.amazonaws.com/Monitor-Gamer-24-X-Micro-Curvo-Full-Hd-120Hz-1Ms-Hdmi-X24CFE_50502_4.jpeg?v30?v638" className="rounded-lg" />
    <h3 className="font-bold text-lg">Monitor 24"</h3>
    <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
    <p className="text-verde font-extrabold">$899.900</p>
  </div>

</section>
    
    <Footer />
  </main>
)
}

export default App