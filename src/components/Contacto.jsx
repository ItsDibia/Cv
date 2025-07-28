import { Mail, Phone } from "lucide-react"

export default function Contacto() {
  const infoContact = {
    email: "diego.apc2016@gmail.com",
    celular: "+57 316 632 1592",
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-slate-100 border rounded shadow-sm text-sm text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>

      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-slate-700" />
          <span className="break-all">{infoContact.email}</span>
        </li>

        <li className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-slate-700" />
          <span>{infoContact.celular}</span>
        </li>
      </ul>
    </section>
  )
}
