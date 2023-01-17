var columnes = Array.from(document.getElementsByClassName("col")); 
var posts = new Array(); 
posts.push(["Exemple de JavaScript","post_img/JS_CodingStyle.png",
	"Imatge: Guia d'estil de JavaScript"]); 

for(x=0; x< posts.length; x++)
{
columnes[x].style.display="block" ; 
var frase  =""; 
    frase += "<h2>" + posts[x][0]+ "</h2>"; 
    frase += '<img src="' + posts[x][1]+ '" alt="" />'; 
    frase += '<p>' + posts[x][2] + '<p>'; 
    	
 columnes[x].innerHTML = frase ;    
}


function contingut(capa)
{
	
	document.getElementById("banner").style.display = "none"; 
	document.getElementById("temes").style.display = "none" ; 
	document.getElementById("contingut").style.display = "block" ; 
}
