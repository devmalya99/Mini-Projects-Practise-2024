import Accordion from './components/accordian'
import Neog from './components/NeoG01'
import './App.css'
import StarRating from './components/Star'
import ImageSlider from './components/ImageSlider'
import LoadMoreButton from './components/LoadMoreButton'
import Neog2 from './components/NeoG2'
import Pagination from './components/Pagination'
import ProgressbarComponent from './components/progressbar'
import CounterApp from './components/counterApp'
import InfinityScroll from './components/infinityscroll'

function App() {


  return (
    <>
    {/* Progressbar */}
    <ProgressbarComponent/>

      {/* Accordian Component */}
      <Accordion/>

      <ProgressbarComponent/>

      {/* Neog React 1 */}
      <Neog />

      <ProgressbarComponent/>

      {/* Star Rating Component */}
      <StarRating/>

      <ProgressbarComponent/>

      {/* Image Slider */}
        <ImageSlider/>

        <ProgressbarComponent/>

        {/* Loadmore button */}
        <LoadMoreButton/>

        <ProgressbarComponent/>

        {/* Neog Day2 React */}
        <Neog2/>

        <ProgressbarComponent/>

        {/* Pagination */}
        <Pagination/>

        <ProgressbarComponent/>

        

        {/* Testing useCounter */}
        <CounterApp/>

        <ProgressbarComponent/>

        {/* Infinity scroll */}
        <InfinityScroll/>
    </>
  )
}

export default App
