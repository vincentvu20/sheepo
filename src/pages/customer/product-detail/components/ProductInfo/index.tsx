import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { green, pink, yellow } from '@mui/material/colors';
import {
  Breadcrumbs,
  Button,
  Container,
  RadioButton,
  TitleSection,
} from '@/components';
import { MinusIcon, PlusIcon } from '@/components/icons';
import { RatingView } from '@/components/Rating';
import { useAppDispatch } from '@/hooks/common-hook';
import { getDetailProduct } from '@/redux/slices/product-slice';
import { ModalServices } from '@/services/modal-service';
import { IProduct } from '@/types/product.types';

const dataProductDefault = {
  id: 5,
  name: 'One Life Graphic T-shirt',
  price: 200,
  cost: 300,
  discount: 40,
  description:
    'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  images: ['/tshirt3.png', '/tshirt2.png', '/tshirt1.png'],
};

export const ProductInfoSection = () => {
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const [radioButtonValue, setRadioButtonValue] = useState<string>('pink');
  const [product, setProduct] = useState<IProduct>(dataProductDefault);
  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [mainImageSrc, setMainImageSrc] = useState<string>(product?.images[0]);
  const [borderImage, setBorderImage] = useState<number>(0);

  const fetchDetailProduct = useCallback(async () => {
    try {
      const { data } = await dispatch(
        getDetailProduct(Number(productId)),
      ).unwrap();

      const dataProduct = data ?? dataProductDefault;
      setProduct(dataProduct as IProduct);
    } catch (error: any) {
      ModalServices.showMessageError({ message: error.message });
    }
  }, [dispatch, productId]);

  useEffect(() => {
    fetchDetailProduct();
  }, [fetchDetailProduct]);

  const handleRadioButtonChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRadioButtonValue(event.target.value);
  };

  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  const handleReduceQuantity = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
    }
  };
  const handleClickImage = (src: string, imagePosition: number) => {
    setMainImageSrc(src);
    setBorderImage(imagePosition);
  };

  return (
    <Container>
      <div className="my-5 border-t border-black10 py-5">
        <Breadcrumbs />
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-3 flex-row flex-wrap-reverse">
          <div className="w-[152px] flex flex-col gap-4 max-sm:flex-row max-sm:w-[111px] max-sm:gap-2">
            <img
              src={product?.images[0]}
              alt="product_image"
              className={
                'w-full rounded-[20px] cursor-pointer h-[167px] object-cover border-black ' +
                (borderImage === 0 ? 'border' : '')
              }
              onClick={_event => handleClickImage(product?.images[0], 0)}
            />
            <img
              src={product?.images[1]}
              alt="product_image"
              className={
                'w-full rounded-[20px] cursor-pointer h-[167px] object-cover border-black ' +
                (borderImage === 1 ? 'border' : '')
              }
              onClick={_event => handleClickImage(product?.images[1], 1)}
            />
            <img
              src={product?.images[2]}
              alt="product_image"
              className={
                'w-full rounded-[20px] cursor-pointer h-[167px] object-cover border-black ' +
                (borderImage === 2 ? 'border' : '')
              }
              onClick={_event => handleClickImage(product?.images[2], 2)}
            />
          </div>
          <div className="w-[444px] rounded-[20px] max-sm:w-[358px]">
            <img
              src={mainImageSrc}
              alt="product_image"
              className="w-full rounded-[20px] h-[530px] object-cover"
            />
          </div>
        </div>
        <div className="max-w-screen-xsmall flex flex-col gap-3">
          <TitleSection name={product?.name || ''} className="text-4xl" />
          <div className="flex gap-4 mt-3">
            <RatingView value={4.5} />
          </div>
          <div className="flex gap-2 items-center align-middle">
            <span className="text-3xl font-bold">${product?.price}</span>
            <span className="text-3xl font-bold text-black40 line-through">
              <del>${product?.cost}</del>
            </span>
            <p className="py-[6px] px-[14px] rounded-[62px] h-[28px] bg-errorLight text-error flex justify-center items-center text-s font-santoshi font-medium max-w-[60px]">
              -{product?.discount}%
            </p>
          </div>
          <span className="text-[16px] font-santoshi text-black60 ">
            {product?.description}
          </span>
          <div className="border border-black10"></div>
          <h1 className="text-[16px] font-santoshi text-black60">
            Select Colors
          </h1>
          <div className="flex">
            <RadioButton
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
              value="pink"
              onChange={handleRadioButtonChange}
              checked={radioButtonValue === 'pink'}
            />
            <RadioButton
              sx={{
                color: yellow[800],
                '&.Mui-checked': {
                  color: yellow[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
              value="yellow"
              onChange={handleRadioButtonChange}
              checked={radioButtonValue === 'yellow'}
            />
            <RadioButton
              sx={{
                color: green[800],
                '&.Mui-checked': {
                  color: green[600],
                },
                '& .MuiSvgIcon-root': { fontSize: 38 },
              }}
              value="green"
              onChange={handleRadioButtonChange}
              checked={radioButtonValue === 'green'}
            />
          </div>
          <div className="border border-black10"></div>
          <h1 className="text-[16px] font-santoshi text-black60">
            Choose Size
          </h1>
          <div className="text-[16px] font-santoshi text-black60">
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-500">
              Small
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-500">
              Medium
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-500">
              Large
            </button>
            <button
              type="button"
              className="py-2.5 px-5 mr-2 mb-2 bg-snowFlake rounded-[62px] hover:bg-black hover:text-white focus:bg-black focus:text-white transition-all duration-500">
              X-Large
            </button>
          </div>
          <div className="border border-black10"></div>
          <div className="flex gap-5 mt-2">
            <div className="bg-snowFlake flex flex-row gap-10 h-[52px] items-center rounded-[62px] py-[16px] px-[20px]">
              <Button
                variant="empty"
                sx={{
                  textTransform: 'none',
                  width: '100%',
                }}
                onClick={handleReduceQuantity}>
                <MinusIcon />
              </Button>

              <h1 className="text-[16px] font-santoshi font-[500px]">
                {productQuantity}
              </h1>
              <Button
                variant="empty"
                sx={{
                  textTransform: 'none',
                  width: '100%',
                }}
                onClick={handleIncreaseQuantity}>
                <PlusIcon />
              </Button>
            </div>
            <Button
              variant="rounded-contained"
              sx={{
                width: '100%',
              }}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
