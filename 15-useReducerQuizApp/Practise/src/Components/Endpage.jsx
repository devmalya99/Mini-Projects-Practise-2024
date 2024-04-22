import React from 'react'

const Endpage = ({ points, maxPoints }) => {
  const percentageScore = (points / maxPoints) * 100

  let emoji = ''
  let quote = ''

  if (percentageScore >= 90) {
    emoji = '🏆'
    quote = '"The only way to do great work is to love what you do." - Steve Jobs'
  } else if (percentageScore >= 80) {
    emoji = '🎉'
    quote = '"Believe you can and you are halfway there." - Theodore Roosevelt'
  } else if (percentageScore >= 70) {
    emoji = '🙂'
    quote = '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill'
  } else if (percentageScore >= 50) {
    emoji = '💪'
    quote = '"The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them." - Michelle Obama'
  } else {
    emoji = '🔥'
    quote = '"Failure is simply the opportunity to begin again, this time more intelligently." - Henry Ford'
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-white">Endpage</h1>
        <p className="text-lg mb-2 text-white">You have collected {points} out of {maxPoints}</p>
        <p className="text-lg font-semibold text-white">Percentage Score: {percentageScore.toFixed(2)}%</p>
        <div className="flex justify-center mt-4">
          <span className="text-6xl mx-2">{emoji}</span>
        </div>
        <p className="text-lg mt-4 text-white italic">{quote}</p>
      </div>
    </div>
  )
}

export default Endpage