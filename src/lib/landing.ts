/**
 * Altere apenas esta variável para trocar o destino de TODOS os botões da página.
 */
export const CHECKOUT_URL = "https://checkout.exemplo.com/display-lucrativo";

/** Lucro bruto por Display vendido (R$67 de venda - R$20 de custo). */
export const LUCRO_POR_DISPLAY = 47;

export const brl = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
