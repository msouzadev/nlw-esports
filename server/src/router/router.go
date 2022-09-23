package router

import (
	"server/src/router/routes"

	"github.com/gorilla/mux"
)

func Generate() *mux.Router {
	router := mux.NewRouter()
	return routes.Setup(router)
}
