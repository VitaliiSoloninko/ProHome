// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const blogItems = document.querySelector('.blog__items');
let counter = 3;
if (blogItems) {
	loadBlogItems();
}

async function loadBlogItems(params) {
	const response = await fetch("files/blog.json", {
		method: "GET"
	});
	if (response.ok) {
		const responseResult = await response.json();
		initBlog(responseResult, 3);
	} else {
		alert("Error!");
	}
}

function initBlog(data, counter) {
	for (let index = 0; index < counter; index++) {
		const item = data.items[index];
		buildBlogItem(item);
	}
}

function buildBlogItem(item) {
	let blogItemTemplate = ``;

	blogItemTemplate += `<article class="blog__item item-blog">`;

	item.image ? blogItemTemplate +=
		`<a href="${item.url}" class="item-blog__image-ibg">
			<img src="${item.image}" alt="Image">
		</a>`
		: null;

	blogItemTemplate +=
		`<div class="item-blog__date">${item.date}</div>`;

	blogItemTemplate +=
		`<h4 class="item-blog__title">
			<a href="${item.url}" class="item-blog__link-title">${item.title}</a>
		</h4>`;

	item.text ? blogItemTemplate +=
		`<div class="item-blog__text text">
			${item.text}						
		</div>`
		: null;

	if (item.tags) {
		blogItemTemplate += `<div class="item-blog__tags">`;

		for (const tag in item.tags) {
			blogItemTemplate += `<a href="${item.tags[tag]}" class="item-blog__tag">${tag}</a>`;
		}

		blogItemTemplate += `</div">`;
	}

	blogItemTemplate += `</article>`;

	blogItems.insertAdjacentHTML('beforeend', blogItemTemplate);
}