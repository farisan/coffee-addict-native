import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content_all: {
    paddingHorizontal: 40,
    width: '100%',
  },
  content_product: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 120,
    width: '90%',
  },
  content_img_product: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: `center`,
    paddingTop: 20,
    width: 110,
    height: 110,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  price: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#895537',
    paddingTop: 40,
    fontWeight: '700',
    textAlign: `center`,
  },
  icon_product: {
    position: 'absolute',
    top: -34,
    left: 10,
    width: 90,
    height: 90,
    borderRadius: 200,
  },
  content_veggie: {
    display: 'flex',
    flexDirection: 'column',
  },
  veggie: {
    paddingLeft: 18,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize:20,
    color: 'black',
    textTransform: `uppercase`,
  },
  content_counter: {
    paddingTop: 30,
    paddingLeft: 18,
    display: 'flex',
    flexDirection: 'row',
  },
  content_down: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 21,
    height: 21,
    backgroundColor: "black",
    borderRadius: 100,
  },
  down: {
    fontWeight: '900',
    fontSize: 15,
    color: 'white',
  },
  number: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    paddingLeft: 30,
    fontSize: 15,
    color: 'black',
  },
  content_up: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    width: 21,
    height: 21,
    backgroundColor: 'black',
    opacity:20,
    borderRadius: 100,
  },
  up: {
    fontWeight: '900',
    fontSize: 15,
    color: 'white',
  },
  content_line: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  line: {
    borderWidth: 0.5,
    height: 1,
    marginTop: 10,
    width: '100%',
    borderBottomColor: 'rgb(224, 224, 226, 0,5)',
  },
  content_total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  total: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 15,
    color: '#ADADAF',
  },
  idr: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  subtotal: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  sub_idr: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
  btn_navigate: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#FFBA33',
    borderColor: 'rgba(186, 186, 186, 0.32)',
    borderWidth: 1,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 150,
    marginBottom: 20,
  },
  btn_navigateSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '100%',
    backgroundColor: '#FFBA33',
    borderColor: 'rgba(186, 186, 186, 0.32)',
    borderWidth: 1,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 50,
  },
  text_btn: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'Poppins',
    color: '#6A4029',
    paddingRight: 55,
  },
  text_cupon: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Poppins',
    color: '#6A4029',
    width:`100%`,
    marginTop:40,
    marginBottom:40,
    textAlign:`center`
  },
  cupon_container: {
    marginTop: 10,
    justifyContent:'center',
    flexDirection:'row',
    // height:60
  },
  content_btn_bottom: {
    height:40
  }
});

export default styles;