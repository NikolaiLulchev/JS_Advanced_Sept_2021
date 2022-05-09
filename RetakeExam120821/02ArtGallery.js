//https://judge.softuni.org/Contests/Practice/Index/3089#1

class ArtGallery {
    constructor(creator) {
        this.creator = creator
        this.possibleArticles = {"picture": 200, "photo": 50, "item": 250}
        this.listOfArticles = []
        this.guests = []
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles[articleModel]) {
            throw Error('This article model is not included in this gallery!')
        }
        if (this.listOfArticles.some(a => a.articleName == articleName)) {

            let currObjectRef = this.listOfArticles.find(a => a.articleName == articleName)
            currObjectRef.quantity = currObjectRef.quantity + quantity
        } else {
            this.listOfArticles.push({articleModel, articleName, quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {

    }

    buyArticle(articleModel, articleName, guestName) {

    }

    showGalleryInfo(criteria) {

    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
