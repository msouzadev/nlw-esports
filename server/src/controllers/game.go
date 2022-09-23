package controllers

import "net/http"

func ListAllGames(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("all games"))
}
