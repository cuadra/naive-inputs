if(!NodeList.prototype.addEventListeners){
	NodeList.prototype.addEventListeners = function(type, fn){
		const nodeList = this;
		nodeList.forEach((node)=>{
			node.addEventListener(type, fn);
		});
	}
}
(()=>{
	class NaiveInputSet{
		constructor(elm){

			elm.querySelectorAll(".question.required .next, .question.required .submit").forEach((elm)=>{
				if(elm.nodeName === "BUTTON"){
					elm.setAttribute("disabled", "disabled");
				}else{
					elm.classList.add("disabled");
				}
			});

			this.quiz = elm;
			this.answers = this.quiz.querySelectorAll(".answer");
			this.previous = this.quiz.querySelectorAll(".previous");
			this.next = this.quiz.querySelectorAll(".next");
			this.submit = this.quiz.querySelectorAll(".submit");
			this.restart = this.quiz.querySelectorAll(".restart");
			this.start = this.quiz.querySelectorAll(".start");

			this.previous.addEventListeners("click", this.PreviousFn.bind(this));
			this.next.addEventListeners("click", this.NextFn.bind(this));
			this.start.addEventListeners("click", this.NextFn.bind(this));
			this.quiz.addEventListener("submit", this.SubmitFn.bind(this));
			this.answers.addEventListeners("click", this.SelectFn.bind(this));
			this.restart.addEventListeners("click", this.restartQuizFn.bind(this));

			//Ensures the app resets in all browsers when Back button is used after a submission which results in a page change.
			window.addEventListener("pagehide", this.restartQuizzesFn.bind(this));
			window.addEventListener("pageshow", this.restartQuizzesFn.bind(this));
			window.addEventListener("unload", this.restartQuizzesFn.bind(this));
			window.addEventListener("load", this.restartQuizzesFn.bind(this));

		}
		PreviousFn(evt){
			evt.preventDefault();
			let current = this.GetParentNode(evt.target, "question"),
				prev = current.previousElementSibling;
			current.classList.remove("selected");
			prev.classList.add("selected");
		}
		NextFn(evt){
			evt.preventDefault();
			let btn = evt.target;
			if(btn.nodeName === "BUTTON" || !btn.classList.contains("disabled")){
				let current = this.GetParentNode(evt.target, "question"),
					next = current.nextElementSibling;
				current.classList.remove("selected");
				next.classList.add("selected");
			}
		}

		restartQuizzesFn(evt){
			evt.preventDefault();
			let quizzes = document.querySelectorAll(".quiz");
			quizzes.forEach((quiz)=>{
				this.restartFn(quiz);
			});
		}
		restartQuizFn(evt){
			this.restartFn(this.GetParentNode(evt.target, "quiz"));
		}

		restartFn(quiz){
			quiz.querySelectorAll(".question, .answer").forEach((elm)=>{
				if(elm.nodeName === "BUTTON"){
					elm.removeAttribute("disabled");
				}else{
					elm.classList.remove("disabled");
				}
				elm.classList.remove("selected");
			});

			quiz.querySelectorAll(".question.required .next").forEach((elm)=>{
				if(elm.nodeName === "BUTTON"){
					elm.setAttribute("disabled", "disabled");
				}else{
					elm.classList.add("disabled");
				}
			});
			
			quiz.querySelectorAll(".question").item(0).classList.add("selected");
		}

		SubmitFn(evt){
			let quiz = evt.target;			
			quiz.querySelectorAll(".question").forEach((elm)=>{
				if(elm.nodeName === "BUTTON"){
					elm.setAttribute("disabled", "disabled");
				}else{
					elm.classList.add("disabled");
				}
			});
		}
		SelectFn(evt){
			evt.preventDefault();
			let elm = evt.target,
				question = this.GetParentNode(elm, "question");
	
			if(!question.classList.contains("multiple")){
				question.querySelectorAll(".answer").forEach((answer)=>{
					answer.classList.remove("selected");
				});
				elm.classList.add("selected");
			}else{
				elm.classList.toggle("selected");
			}
	
			if(question.classList.contains("required")){
				if(question.querySelectorAll(".selected").length !== 0){
					question.querySelectorAll(".next, .submit").forEach((elm)=>{
						if(elm.nodeName === "BUTTON"){
							elm.removeAttribute("disabled");
						}else{
							elm.classList.remove("disabled");
						}
					});
				}else{
					question.querySelectorAll(".next, .submit").forEach((elm)=>{
						if(elm.nodeName === "BUTTON"){
							elm.setAttribute("disabled", "disabled");
						}else{
							elm.classList.add("disabled");
						}
					});
				}
			}
		}
		GetParentNode(elm, selector){
			elm = elm.parentNode;
			while (!elm.classList.contains(selector)) {
				elm = elm.parentNode;
			}
			return elm;
		}
	}

	let nodeList = document.querySelectorAll(".quiz");
	nodeList.forEach((elm)=>{
		let quiz = new NaiveInputSet(elm);
	});

})();