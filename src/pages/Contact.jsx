import React from 'react'

function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Biz bilan bog'laning</h1>
      
      <p className="mb-4">
        Bu test sahifasi "Aloqa" bo'limi uchun. Haqiqiy loyihada bu yerda kontakt formasi yoki bog'lanish ma'lumotlari bo'lishi mumkin.
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Test kontakt ma'lumotlari:</h2>
        <ul className="list-disc pl-5">
          <li>Telefon: (99) 999-99-99</li>
          <li>Email: test@example.com</li>
          <li>Manzil: Test ko'chasi, 123-uy</li>
        </ul>
      </div>

      <p className="text-sm text-gray-600">
        Eslatma: Bu ma'lumotlar faqat test uchun va haqiqiy emas.
      </p>
    </div>
  )
}

export default Contact