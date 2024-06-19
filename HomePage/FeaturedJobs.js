import { View, Image, Text, StyleSheet, FlatList } from "react-native";

const jobs = [
{
  id: '1',
  title: 'Data Scientist',
  subtitle: 'Amazon',
  location: 'Seattle, US',
  salary: '$200,000',
  icon: require('../assets/Facebook.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#5386E4'
},
{
  id: '2',
  title: 'Machine Learning Engineer',
  subtitle: 'Apple',
  location: 'Cupertino, US',
  salary: '$195,000',
  icon: require('../assets/Google.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#04284A'
},
{
  id: '3',
  title: 'Financial Analyst',
  subtitle: 'Goldman Sachs',
  location: 'New York City, US',
  salary: '$220,000',
  icon: require('../assets/Facebook.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#EF2D2D'
},
{
  id: '4',
  title: 'Statistician',
  subtitle: 'Microsoft',
  location: 'Redmond, US',
  salary: '$180,000',
  icon: require('../assets/Google.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#37A645'
},
{
  id: '5',
  title: 'Software Architect',
  subtitle: 'Tesla',
  location: 'Palo Alto, US',
  salary: '$210,000',
  icon: require('../assets/Facebook.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#E8C408'
},
{
  id: '6',
  title: 'Research Scientist',
  subtitle: 'IBM',
  location: 'Armonk, US',
  salary: '$190,000',
  icon: require('../assets/Google.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#DB18C1'
},
{
  id: '7',
  title: 'Surgeon',
  subtitle: 'Johns Hopkins Hospital',
  location: 'Baltimore, US',
  salary: '$250,000',
  icon: require('../assets/Facebook.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#f08080'
},
{
  id: '8',
  title: 'Clinical Psychologist',
  subtitle: 'Mayo Clinic',
  location: 'Rochester, US',
  salary: '$185,000',
  icon: require('../assets/Google.png'),
  background: require('../assets/Background.png'),
  backgroundColor: '#9C18DB'
}

];

const Card = ({ title, subtitle, location, salary, icon, background, backgroundColor }) => {
  return (
    <View style={[styles.jobSection, { backgroundColor }]}>
      <Image source={background} style={styles.background}></Image>
      <View style={styles.textSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.salary}>{salary}</Text>
        <View style={styles.rectangle}>
          <Image source={icon} style={styles.icon}></Image>
        </View>
      </View>
    </View>
  );
};

function FeaturedJobs() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.component}
        data={jobs}
        renderItem={({ item }) => (
          <Card 
            title={item.title} 
            subtitle={item.subtitle}
            location={item.location}
            salary={item.salary}
            icon={item.icon}
            background={item.background} 
            backgroundColor={item.backgroundColor} 
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 30,
  },

  component: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },

  heading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D0D26',
    width: 114,
    height: 21,
    lineHeight: 20.8,
  },

  seeAll: {
    width: 43,
    height: 17,
    fontSize: 14,
    fontWeight: '400',
    color: '#95969D',
    lineHeight: 16.8,
  },

  jobSection: {
    width: 280,
    height: 186,
    marginRight: 24,
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },

  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.06,
  },

  textSection: {
    flex: 1, 
    justifyContent: 'center',
    padding: 20,                
  },

  title: {
    position: 'absolute',
    color: '#FFFFFF',
    top: 20,
    left: 80,
    width: 145,
    height: 21,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20.8,
  },

  subtitle: {
    position: 'absolute',
    color: '#FFFFFF',
    top: 42,
    left: 80,
    width: 68,
    height: 21,
    fontSize: 14,
    lineHeight: 20.8,
    fontWeight: '400',
  },

  location: {
    position: 'absolute',
    color: '#FFFFFF',
    bottom: 15,
    right: 20,
    width: 150, 
    height: 24,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'right',
  },

  salary: {
    position: 'absolute',
    color: '#FFFFFF',
    bottom: 15,
    left: 20,
    width: 68,
    height: 24,
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 15,
  },

  rectangle: {
    position: 'absolute',
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    top: 20,
    left: 20,
  },

  icon: {
    top: 11,
    left: 11,
  },
});

export default FeaturedJobs;
