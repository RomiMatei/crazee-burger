import styled from 'styled-components';

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled className="product">
      <img className="image" src={imageSource} alt={title} />
      <div className="info-text">
        <div className="description">
          <div className="title">{title}</div>
          <div className="price">{price} €</div>
          <button className="button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: red;
  width: 240px;
  height: 330px;

  .image {
    border: 1px solid black;
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    border: 1px solid black;
  }
`;
