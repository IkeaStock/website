module.exports = {
  async redirects() {
    return [
        {
            source: '/discordBot/invite',
            destination: 'https://discord.com/api/oauth2/authorize?client_id=994694575497162842&permissions=19456&scope=applications.commands%20bot',
            permanent: false,
        }
    ]
  }
}
