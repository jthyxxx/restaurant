let showMenu = () => {
    content.removeChild(main);
    content.appendChild(foodMenu)
    foods.forEach((fd) => {
        foodMenu.appendChild(fd);
    })
}

export {showMenu}