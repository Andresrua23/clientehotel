import React, { useState } from 'react';

export function Formulario() {
  const [fechaEntrada, setFechaEntrada] = useState(null);
  const [fechaSalida, setFechaSalida] = useState(null);

  const handleReservar = () => {
    // Aquí puedes realizar acciones relacionadas con la reserva
    console.log('Reservado:', fechaEntrada, fechaSalida);
  };

  return (
    <>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Telefono</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Entrada</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label className="form-label">Salida</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReservar}
            >
              Reservar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
