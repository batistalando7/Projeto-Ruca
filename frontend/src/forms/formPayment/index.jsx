import api from "../../services/api";
import React, { useEffect, useState } from "react";

function FomrPayment() {
  const [gasStations, setGasStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState("");
  const [totalToPay, setTotalToPay] = useState("");
  const [litros, setLitros] = useState("");
  const [formData, setFormData] = useState({
    gas_station_id: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  useEffect(() => {
    api
      .get("/gas-stations")
      .then((response) => {
        console.log("Gas Stations:", response.data);
        setGasStations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gas stations:", error);
      });
  }, []);

  const handleSelectStation = (e) => {
    const id = e.target.value;
    setFormData((prev) => ({
      ...prev,
      gas_station_id: id,
    }));
    const station = gasStations.find((station) => station.id === parseInt(id));
    if (station) {
      setSelectedStation(station);
      setDiscount(station.discount);
      setPrice(station.price);
    } else {
      setSelectedStation(null);
      setDiscount(0);
      setPrice("");
    }
  };

  const handleAmount = (e) => {
    if (price && discount !== null) {
      const amount = parseFloat(e.target.value);
      setFormData((prev) => ({
        ...prev,
        amount: amount,
      }));
      setLitros((amount / price).toFixed(2));
      const discountedPrice = amount * (discount / 100);
      const total = amount - discountedPrice;
      setTotalToPay(total.toFixed(2));
    } else {
      const amount = parseFloat(e.target.value);
      const total = amount;
      setLitros((amount / price).toFixed(2));
      setTotalToPay(total.toFixed(2));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await api.post("/payments", formData);
      setFeedback({
        type: "success",
        message: "Pagamento realizado com sucesso",
      });
      setFormData({ gas_station_id: "", amount: "" });
      console.log("Resposta da API:", response.data);
    } catch (err) {
      setFeedback({
        type: "error",
        message: "Erro ao efetuar o pagamento",
      });
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-item">
              <label for="f1">Posto de Combustível:</label>
              <select
                id="gas_station"
                className="form-select"
                name="gas_station_id"
                onChange={handleSelectStation}
                required
              >
                <option value="">Selecione um posto</option>
                {gasStations.map((station) => (
                  <option key={station.id} value={station.id}>
                    {station.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="form-item">
              <label for="f2">Desconto:</label>
              <input
                type="text"
                id="discount"
                name="discount"
                value={discount + "%"}
                disabled
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-item">
              <label for="f3">Preço:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={price}
                disabled
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="form-item">
              <label for="f3">Valor:</label>
              <input
                type="text"
                id="amount"
                name="name"
                onChange={handleAmount}
                required
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-item">
              <label for="f3">litros:</label>
              <input type="text" id="litros" value={litros} required />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-item">
              <label for="f3">Total a Pagar:</label>
              <input
                type="text"
                id="total_to_pay"
                name="total_to_PAy"
                value={totalToPay}
                readOnly
              />
            </div>
          </div>
          <div className="col-lg-12">
            <button
              type="submit"
              className="btn-primary-line"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
          <div className="col-lg-12 mt-3">
            {feedback.message && (
              <p
                className={
                  feedback.type === "success" ? "text-success" : "text-danger"
                }
              >
                {feedback.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default FomrPayment;
