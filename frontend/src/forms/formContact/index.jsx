import React, { useState } from "react";
import api from "../../services/api"; // volta dois níveis até 'services'

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await api.post("/contacts", formData);
      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso!",
      });
      setFormData({ name: "", email: "", message: "" });
      console.log("Resposta da API:", response.data);
    } catch (err) {
      setFeedback({
        type: "error",
        message: "Erro ao enviar mensagem. Tente novamente.",
      });
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-contact">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <input
            type="text"
            name="name"
            placeholder="Primeiro e último nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            placeholder="Deixe a sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-lg-12">
          <button
            className="btn-primary-line pull-right"
            type="submit"
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
  );
}

export default FormContact;
