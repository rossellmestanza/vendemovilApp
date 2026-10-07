// ==================================================
// FACTUCELL — Sistema de Ventas y Facturación
// Versión: 1.0 | Guayaquil, Ecuador 🇪🇨
// Rubro: Artículos y Juegos Pirotécnicos 🎆
// ==================================================

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;

// ==================================================
// 🇪🇨 CONFIGURACIÓN — ECUADOR
// ==================================================
const CONFIG = {
  appNombre: "Factucell",
  version: "1.0.0",
  pais: "Ecuador",
  moneda: "USD",
  simboloMoneda: "$",
  zonaHoraria: "America/Guayaquil",
  formatoFecha: "DD/MM/YYYY",
  idioma: "es-EC"
};

// ==================================================
// 🎨 PALETA DE COLORES — PIROTECNIA
// ==================================================
const COLORES = {
  primario: "#E63946",    // Rojo fuego
  secundario: "#FF9F1C",  // Naranja chispa
  acento: "#FFD60A",      // Amarillo brillo
  oscuro: "#1A1A2E",      // Azul noche
  fondo: "#0F0F1E",
  tarjeta: "#232342",
  texto: "#FFFFFF",
  textoSuave: "#B8B8D1",
  exito: "#06D6A0",
  advertencia: "#FFBE0B",
  error: "#E63946"
};

// ==================================================
// 🔧 BASE DE DATOS
// ==================================================
const db = new sqlite3.Database('./factucell.db', (err) => {
  if (err) {
    console.error('❌ Error al conectar base de datos:', err.message);
  } else {
    console.log('✅ Conectado a Factucell — Base de Datos');
  }
});

// ==================================================
// 📦 MIDDLEWARES
// ==================================================
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// ==================================================
// 🚀 INICIAR SERVIDOR
// ==================================================
app.listen(port, () => {
  console.log(`\n🔥 ${CONFIG.appNombre} — Servidor activo`);
  console.log(`📍 Versión: ${CONFIG.version}`);
  console.log(`🌍 País: ${CONFIG.pais} | Moneda: ${CONFIG.simboloMoneda}`);
  console.log(`🎆 Rubro: Juegos Pirotécnicos`);
  console.log(`🔗 Puerto: ${port}\n`);
});

module.exports = { app, db, CONFIG, COLORES };
