let posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21392,
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment:
			"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152,
	},
];

let mainEl = document.getElementById("main");

function renderPost(postList) {
	localStorage.setItem("post", JSON.stringify(postList));
	let stringRen = "";
	for (let i = 0; i < postList.length; i++) {
		stringRen += `
            <section>
                <header class="post-header">
                    <img src="${postList[i].avatar}" alt="Profile picture of ${
			postList[i].name
		}" class="profile-img">
                    <h1>${postList[i].name}</h1>
                    <p class="subtext">${postList[i].location}</p>
                </header>
                <img src="${postList[i].post}" alt="painting by ${
			postList[i].name
		}" class="post-img">
                <div>
                    <ul class="action-container">
                        <li><img src="images/icon-heart.png" alt="simple heart icon" class="heart-img" onclick="likePost(${i})"></li>
                        <li><img src="images/icon-comment.png" alt="comment icon"></li>
                        <li><img src="images/icon-dm.png" alt="simple paper plane icon"></li>
                    </ul>
                    <div class="discription-conrainer">
                        <h2 id="likeNumber${i}">${formateLikes(
			postList[i].likes
		)} Likes</h2>
                        <p><span class="bold">${postList[i].username}</span> ${
			postList[i].comment
		}</p>
                    </div>
                </div>
            </section>
        `;
	}
	mainEl.innerHTML = stringRen;
}

function likePost(likeId) {
	let likeEl = document.getElementById("likeNumber" + likeId);
	likeEl.textContent = formateLikes(++posts[likeId].likes) + " Likes";
	localStorage.setItem("post", JSON.stringify(posts));
}

/*
 *   Formates a number to include commas, returns a string
 *   Exmaple: 13411 -> 13,411
 *   Requires Num to containing only numbers
 */
function formateLikes(num) {
	let strNum = num.toString();
	if (strNum.length <= 3) {
		return strNum;
	}
	return formateLikes(strNum.slice(0, -3)) + "," + strNum.slice(-3);
}

if ("post" in localStorage) {
	posts = JSON.parse(localStorage.getItem("post"));
}

renderPost(posts);
