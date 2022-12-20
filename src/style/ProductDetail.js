import {StyleSheet} from 'react-native';
import {
  verticalScale,
  moderateScale,
} from '../helpers/Metrics';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  deliver_desc: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(15),
    opacity: 0.5,
  },
  img_bar: {
    flex: 1,
    paddingTop: verticalScale(30),
  },
  img_product: {
    borderRadius: 200,
    width: 200,
    height: 200,
  },
  name_product: {
    color: '#000',
    fontSize: moderateScale(28),
    fontWeight: '900',
    marginTop: verticalScale(30),
    textTransform:`uppercase`
  },
  price: {
    color: '#6A4029',
    fontFamily: 'Poppins',
    fontSize: moderateScale(22),
    fontWeight: '700',
  },
  text_bar1: {
    marginTop:30,
    paddingHorizontal: 20,
    width: '100%',    
  },
  text_bar2: {
    marginTop: 15,
    paddingHorizontal: verticalScale(20),
    width: '100%',
  },
  title_info: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
  },
  desc_text: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: moderateScale(15),
    opacity: 0.5,
    textAlign:`justify`,
    height:120
  },
});

export default styles;
