// Local Storage of the artist
var artistList = JSON.parse(localStorage.getItem("artistList"));

if (artistList == null) {
  artistList = [];
}

// set the artist when loaded
function set_artist_page() {
  artistList.forEach(element => {
    let name = element.name;
    let about = element.about;
    let url = element.url;
    set_artist_block(name, about, url);
  });
}

//  Toggles the form from the add artist button
function show_form() {
  let form = document.getElementById("artist_form");
  if (form.style.display == "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

// Adds the artist information from the form to the artist list
function add_artist() {
  let name = document.getElementById("form_name").value;
  let about = document.getElementById("form_about").value;
  let url = document.getElementById("form_url").value;

  let temp = {
    url: url,
    name: name,
    about: about
  };

  // Add to local storage
  artistList.push(temp);
  localStorage.setItem("artistList", JSON.stringify(artistList));

  // create the ui
  set_artist_block(name, about, url);

  let form = document.getElementById("artist_form");
  form.reset();
  form.style.display = "none";
}

// Deletes the Artist from the artist lists
function delete_artist(e) {
  let temp_name =
    e.parentNode.firstElementChild.nextSibling.firstElementChild.textContent;
  for (let i = 0; i < artistList.length; i++) {
    if (artistList[i].name == temp_name) {
      artistList.splice(i, 1);
    }
  }

  localStorage.setItem("artistList", JSON.stringify(artistList));
  e.parentNode.parentNode.removeChild(e.parentNode);
}

//seach button function
function search() {
  let input_name = document.getElementById("form_search_input").value;
  let same = true;

  if (input_name.length == 0) {
    // reset the artist on the page
    set_no_artist();
    set_artist_page();
  } else {
    // remove the artist blocks
    set_no_artist();

    // find matches to the chars
    artistList.forEach(element => {
      same = true;
      for (let i = 0; i < input_name.length; i++) {
        if (element.name[i].toLowerCase() != input_name[i].toLowerCase()) {
          same = false;
        }
      }
      // set the matching artist
      if (same) {
        set_artist_block(element.name, element.about, element.url);
      }
    });
  }
}

function set_artist_block(name, about, url) {
  let artist_container = document.getElementById("artist_container");
  let div_artist_block = document.createElement("div");
  let img_artist_img = document.createElement("img");
  let div_artist_desc = document.createElement("div");
  let h3_artist_name = document.createElement("h3");
  let p_artist_school = document.createElement("p");
  let button_del_btn = document.createElement("button");

  div_artist_block.setAttribute("class", "artist_block");

  img_artist_img.setAttribute("class", "artist_img");
  img_artist_img.setAttribute("src", url);

  div_artist_desc.setAttribute("class", "artist_desc");

  h3_artist_name.setAttribute("class", "artist_name");
  h3_artist_name.textContent = name;

  p_artist_school.setAttribute("class", "artist_school");
  p_artist_school.textContent = about;

  button_del_btn.setAttribute("class", "del_btn");
  button_del_btn.setAttribute("onclick", "delete_artist(this)");
  button_del_btn.textContent = "Delete";

  div_artist_desc.append(h3_artist_name);
  div_artist_desc.append(p_artist_school);

  div_artist_block.append(img_artist_img);
  div_artist_block.append(div_artist_desc);
  div_artist_block.append(button_del_btn);
  artist_container.append(div_artist_block);
}

function set_no_artist() {
  let artist_container = document.getElementById("artist_container");
  while (artist_container.firstChild) {
    artist_container.removeChild(artist_container.firstChild);
  }
}
