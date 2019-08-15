# Naive Inputs

[![Netlify Status](https://api.netlify.com/api/v1/badges/5041f621-5d06-48b6-9050-f37a56b5eb06/deploy-status)](https://app.netlify.com/sites/compassionate-hopper-209260/deploys)

A JS class which allows the user to navigate from view to view. Useful for Surveys or Quizzes and Tests. No processing or validation of results.
[Demo](https://compassionate-hopper-209260.netlify.com)

## Getting Started

Install [Node.js](https://nodejs.org/en/)

### Installing

```
npm install
```
### Build

```
npm run build
```

### Develop

```
npm start
```



### Example 1: With Form and Fieldset so a Submit Listener can be attached.

```html
<form class="quiz styled">
	<fieldset class="question selected">
		<div class="text">
			<p>Start Screen</p>
		</div>
		<div class="controls">
			<button type="button" class="start">Start</button>
		</div>
	</fieldset>
	<fieldset class="question multiple required">
		<div class="text">
			<p>Curabitur eleifend a elit nec semper. Select all that apply. (Required to proceed.)</p>
		</div>
		<div class="answers">
			<button type="button" class="answer"></button>
			<button type="button" class="answer"></button>
			<button type="button" class="answer"></button>
		</div>
		<div class="controls">
			<button type="button" class="previous">Previous</button>
			<button type="button" class="next">Next</button>
			<button type="button" class="restart">Restart</button>
		</div>
	</fieldset>
	<fieldset class="question">
		<div class="text">
			<p>Duis blandit ante mi, vel sollicitudin massa hendrerit vitae. (Not required to proceed.)</p>
		</div>
		<div class="answers">
			<button type="button" class="answer" value=""></button>
			<button type="button" class="answer" value=""></button>
			<button type="button" class="answer" value=""></button>
		</div>
		<div class="controls">
			<button type="button" class="previous">Previous</button>
			<button type="button" class="next">Next</button>
			<button type="button" class="restart">Restart</button>
		</div>
	</fieldset>
	<fieldset class="question required">
		<div class="text">
			<p>Quisque ut sem ac metus rhoncus porttitor. (Required to proceed.)</p>
		</div>
		<div class="answers">
			<button type="button" class="answer" value=""></button>
			<button type="button" class="answer" value=""></button>
			<button type="button" class="answer" value=""></button>
		</div>
		<div class="controls">
			<button type="button" class="previous">Previous</button>
			<button type="submit" class="submit">Submit</button>
			<button type="button" class="restart">Restart</button>
		</div>
	</fieldset>
</form>
```

### Example 2: Form, Fieldsets and Buttons replaced with DIVs.

```html
<div class="quiz styled">
	<div class="question selected required">
		<div class="answers">
			<div class="answer"></div>
			<div class="answer"></div>
			<div class="answer"></div>
		</div>
		<div class="controls">
			<div class="next">Next</div>
		</div>
	</div>
	<div class="question required">
		<div class="answers">
			<div class="answer"></div>
			<div class="answer"></div>
			<div class="answer"></div>
		</div>
		<div class="controls">
			<div class="previous">Previous</div>
			<div class="next">Next</div>
		</div>
	</div>
	<div class="question multiple">
		<div class="answers">
			<div class="answer"></div>
			<div class="answer"></div>
			<div class="answer"></div>
		</div>
		<div class="controls">
			<div class="previous">Previous</div>
			<div class="submit">Submit</div>
		</div>
	</div>
</div>
```

### Example 3: A simplified traditional format.

```html
<div class="quiz">
	<div class="question selected required">
		<p class="text">Quisque ut sem ac metus rhoncus porttitor. (Required to proceed.)</p>
		<ol>
			<li class="answer">Phasellus at pretium sapien. Integer pellentesque id eros ac hendrerit.</li>
			<li class="answer">In interdum feugiat arcu, nec elementum tellus feugiat a.</li>
			<li class="answer">Quisque id quam hendrerit, placerat felis eu, viverra lorem.</li>
		</ol>
		<div class="next">Next</div>
	</div>
	<div class="question required">
		<p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. (Required to proceed.)</p>
		<ol>
			<li class="answer">Nulla interdum magna in euismod imperdiet.</li>
			<li class="answer">Nunc sed sem et lorem ullamcorper congue.</li>
			<li class="answer">Donec in nulla ac nisi dapibus iaculis.</li>
		</ol>
		<div class="previous">Previous</div>
		<div class="next">Next</div>
	</div>
	<div class="question multiple required">
		<p class="text">Donec in nulla ac nisi dapibus iaculis. (Required to proceed.)</p>
		<ol>
			<li class="answer">Etiam suscipit quam sit amet nisl molestie, quis ornare risus euismod.</li>
			<li class="answer">Cras a tellus aliquet, posuere sapien sed, commodo justo.</li>
			<li class="answer">Aenean semper mauris at nibh scelerisque, sed sollicitudin purus sodales.</li>
		</ol>				
		<div class="previous">Previous</div>
		<div class="submit">Submit</div>
	</div>
</div>
```


## Built With

* [Parcel](https://parceljs.org) - Build Tool
* [Sass](https://sass-lang.com) - Better CSS!

