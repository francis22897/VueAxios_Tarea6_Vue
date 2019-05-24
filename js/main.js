Vue.component('card', {
	props: ['card'],
	template: "#card-template",
	computed: {
		url_image: function () {
			return this.card.image;
		}
	}
})

new Vue({
	el: "#app",
	data: {
		cards: []
	},
	created: function () {
		axios.get("https://rickandmortyapi.com/api/character/")
			.then(response => {

				response.data.results.sort(function () {
					return Math.random() - 0.5
				});
				response.data.results.length = 6;

				response.data.results.forEach(element => {

					let type = element.type == "" ? "unknown" : element.type;

					response = {
						image: element.image,
						name: element.name,
						id: element.id,
						status: element.status,
						species: element.species,
						type: type,
						gender: element.gender
					}

					this.cards.push(response);

				});

				console.log

			})
			.catch(error => {
				console.log(error);
			})
	}
})