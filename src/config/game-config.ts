export const gameConfig = {
  container: {
    // The aspect ratio of the container can be controlled dynamically by updating
    // the 'ratio' property without the need to change any other part of the code.
    ratio: 9 / 16,
    maxHeight: 640,
    get maxWidth() {
      return this.maxHeight * this.ratio;
    },
    borderRadius: 24,
  },
  campaignBanner: {
    offsetTop: '10%',
    width: '80%',
    borderRadius: 8,
    padding: 12,
    background: '#06b6d4',
    textColor: '#cffafe',
    fontSize: 16,
  },
  startButton: {
    offsetTop: '70%',
    buttonText: 'Start Button',
    height: 60,
    width: '60%',
    fontSize: 20,
    borderRadius: 16,
  },
};
