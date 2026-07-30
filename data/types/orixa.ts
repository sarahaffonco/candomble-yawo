export interface Qualidade {
  nome: string;
  caracteristicas: string;
 historia: string;
  cores: string;
  ligacao: string;
}

export interface Orixa {
  slug: string;
  imagem: string;
  nome: string;
  descricao: string;
  dominio: string;
  caracteristicaOrixa: string;
  cor: string;
  semana: string;
  caracteristicasFilhos: string;

  qualidades: Qualidade[];
}