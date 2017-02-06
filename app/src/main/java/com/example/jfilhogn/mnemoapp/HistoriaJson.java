package com.example.jfilhogn.mnemoapp;

import java.io.Serializable;

/**
 * Created by jfilhogn on 11/01/17.
 */

public class HistoriaJson{

    public String categoria;
    public String titulo;
    public String capa;
    public String texto;
    public String figuraUm;
    public String figuraDois;
    public String figuraTres;
    public String figuraQuatro;

    public HistoriaJson(String categoria, String titulo, String capa, String texto, String figuraUm, String figuraDois, String figuraTres, String figuraQuatro){
        this.categoria = categoria;
        this.capa = capa;
        this.titulo = titulo;
        this.texto = texto;
        this.figuraUm = figuraUm;
        this.figuraDois = figuraDois;
        this.figuraTres = figuraTres;
        this.figuraQuatro = figuraQuatro;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setFiguraQuatro(String figuraQuatro) {
        this.figuraQuatro = figuraQuatro;
    }

    public void setFiguraTres(String figuraTres) {
        this.figuraTres = figuraTres;
    }

    public void setFiguraDois(String figuraDois) {
        this.figuraDois = figuraDois;
    }

    public void setFiguraUm(String figuraUm) {
        this.figuraUm = figuraUm;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getCapa() {
        return capa;
    }

    public String getTexto() {
        return texto;
    }

    public String getFiguraUm() {
        return figuraUm;
    }

    public String getFiguraDois() {
        return figuraDois;
    }

    public String getFiguraTres() {
        return figuraTres;
    }

    public String getFiguraQuatro() {
        return figuraQuatro;
    }
}
