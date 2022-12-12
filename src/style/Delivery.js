import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content_all: {
    marginTop: 50,
    marginLeft: '10%',
    width: `80%`,
  },
  Delivery_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 34,
    fontWeight: '900',
    marginTop:"5%"
  },
  address_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
  },
  address_text_details: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 17,
    fontWeight: '700',
  },
  change_btn: {
    color: `#6A4029`,
    fontFamily: `Poppins`,
    fontSize: 15,
    fontWeight: '400',
  },
  main_address_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 17,
    fontWeight: '500',
    marginBottom:10,
  },
  rule: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width:`100%`
  },
  detail_address_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 15,
    fontWeight: '400',
    marginVertical:10,
  },
  address_main_container: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: '5%',
  },
  address_main_box: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  number_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 15,
    fontWeight: '400',
    marginTop:10,
  },
  delivery_method_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 17,
    fontWeight: '700',
  },
  option_container: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    marginTop: '5%',
  },
  total_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 17,
    fontWeight: '400',
  },
  price_text: {
    color: `black`,
    fontFamily: `Poppins`,
    fontSize: 22,
    fontWeight: '700',
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal:10,
  },
  price_container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal:10,
  },
  delivery_method_container: {
    marginTop: '10%',
  },
  options: {
    marginTop: 15,
    marginBottom: 15,
  },
  border_bottom: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 10,
    width: '90%',
  },
  margin_dine: {
    marginLeft: 10,
  },
});

export default styles;
