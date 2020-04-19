import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xBE810b9E32118ec142B234B958a494ba728A0Bd8'
);

export default instance;
