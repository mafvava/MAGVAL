interface Props {

  businessName: string;

  setBusinessName: (value: string) => void;

  businessType: string;

  setBusinessType: (value: string) => void;

}

export default function BusinessInput({

  businessName,

  setBusinessName,

  businessType,

  setBusinessType

}: Props) {

  return (

    <div className="space-y-8">

      <div>

        <label
          htmlFor="businessName"
          className="block text-lg font-semibold text-gray-800"
        >
          Nombre del negocio
        </label>

        <p className="text-gray-500 text-sm mt-1">

          Es el nombre que aparecerá en tu futura página web.

        </p>

        <input
          id="businessName"
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          placeholder="Ejemplo: MagVal"
          className="
          mt-3
          w-full
          rounded-2xl
          border
          border-gray-300
          px-5
          py-4
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          "
        />

      </div>

      <div>

        <label
          htmlFor="businessType"
          className="block text-lg font-semibold text-gray-800"
        >
          Tipo de negocio
        </label>

        <p className="text-gray-500 text-sm mt-1">

          Describe brevemente el giro de tu empresa.

        </p>

        <input
          id="businessType"
          type="text"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          placeholder="Ejemplo: Restaurante, Clínica, Tienda de ropa..."
          className="
          mt-3
          w-full
          rounded-2xl
          border
          border-gray-300
          px-5
          py-4
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          "
        />

      </div>

    </div>

  );

}