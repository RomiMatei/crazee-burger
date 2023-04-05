import styled from 'styled-components';

export default function Product({ title, imageSource, price }) {
  return (
    <ProductStyled className="product">
      <img className="image" src={imageSource} alt={title} />
      <div className="info-text">
        <div className="title">{title}</div>
        <div className="description">
          <div className="price">{price} €</div>
          <button className="button">Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  background: red;
  width: 200px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px 20px 0 20px;

  .image {
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    margin-top: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .description {
    border: 1px solid blue;
  }
`;
