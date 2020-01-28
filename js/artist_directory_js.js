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
    console.log("Add Artist");
    let name = document.getElementById("form_name").value;
    let about = document.getElementById("form_about").value;
    let url = document.getElementById("form_url").value;

    let artist_container = document.getElementById("artist_container");

    let div_artist_block = document.createElement("div");
    div_artist_block.setAttribute("class", "artist_block");

    let img_artist_img = document.createElement("img");
    img_artist_img.setAttribute("class", "artist_img");
    img_artist_img.setAttribute("src", url);

    let div_artist_desc = document.createElement("div");
    div_artist_desc.setAttribute("class", "artist_desc");

    let h3_artist_name = document.createElement("h3");
    h3_artist_name.setAttribute("class", "artist_name");
    h3_artist_name.textContent = name;

    let p_artist_school = document.createElement("p");
    p_artist_school.setAttribute("class", "artist_school");
    p_artist_school.textContent = about;

    let button_del_btn = document.createElement("button");
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

// Deletes the Artist from the artist lists
function delete_artist(e) {
    e.parentNode.parentNode.removeChild(e.parentNode);
    console.log("Delete Artist");
}