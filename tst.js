 <div className="oneCard">
   <a className="card" href="#">
     <div className="imgDRG">
       <img src={info.url} className="card-img-top" alt="..." />
     </div>
     <div className="card-body">
       <h5 className="card-title">{info.name}</h5>
     </div>
     <div className="priceTXT">
       <p className="card-text">
         Исходная цена:
         {' '}
         {info.price}
       </p>
       <p className="card-text">
         Цена со скидкой:
         {' '}
         {info.fixPrice}
       </p>
     </div>
     <div className="btnBYE">
       <button type="submit" className="btn btn-primary">Купить</button>
     </div>
   </a>
 </div>;
