export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/91ocU8970hL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71DWj7cP0ML._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81lAPl9Fl0L._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter and the Sorcerer's Stone" />
         <img src={book2} alt="Harry Potter and the Chamber of Secrets" />
         <img src={book3} alt="Harry Potter and the Prisoner of Azkaban" />
      </div>      
   );
}