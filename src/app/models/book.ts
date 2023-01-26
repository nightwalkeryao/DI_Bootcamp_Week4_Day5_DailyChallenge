export class Book {

    public title: string;
    public authors: string[] ;
    public coverImage: string;
    public previewMode: boolean;
  
    constructor(title:string, authors:string[], coverImage:string, previewMode: boolean = true) {
      this.title = title;
      this.authors = authors;
      this.coverImage = coverImage;
      this.previewMode = previewMode
      
    }

    get  getAuthorsList(): string {
        return this.authors.join(", ");
    }
    
  }