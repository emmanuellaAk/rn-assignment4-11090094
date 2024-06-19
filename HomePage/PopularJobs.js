import { View, Text, StyleSheet, Image} from 'react-native';

const jobs = [
    {
        id: '1',
        title: 'Senior Software Developer',
        salary: '$120,000/y',
        company: 'Google',
        location: 'San Francisco, US',
        icon: require('../assets/BurgerKing.png')
      },
      {
        id: '2',
        title: 'UX Designer',
        salary: '$110,000/y',
        company: 'Apple',
        location: 'Austin, US',
        icon: require('../assets/Beats.png')
      },
      {
        id: '3',
        title: 'Marketing Manager',
        salary: '$105,000/y',
        company: 'Netflix',
        location: 'Toronto, Canada',
        icon: require('../assets/Facebook2.png')
      },
      {
        id: '4',
        title: 'Operations Manager',
        salary: '$115,000/y',
        company: 'Twitter',
        location: 'Chicago, US',
        icon: require('../assets/BurgerKing.png')
      },
      {
        id: '5',
        title: 'Chief Technology Officer',
        salary: '$150,000/y',
        company: 'Spotify',
        location: 'Boston, US',
        icon: require('../assets/Beats.png')
      },
      {
        id: '6',
        title: 'AI Research Scientist',
        salary: '$160,000/y',
        company: 'OpenAI',
        location: 'London, UK',
        icon: require('../assets/Facebook2.png')
      },
      {
        id: '7',
        title: 'Data Engineer',
        salary: '$135,000/y',
        company: 'Amazon',
        location: 'Berlin, Germany',
        icon: require('../assets/BurgerKing.png')
      },
      {
        id: '8',
        title: 'Cybersecurity Analyst',
        salary: '$125,000/y',
        company: 'Microsoft',
        location: 'Sydney, Australia',
        icon: require('../assets/Beats.png')
      }
      
];

function PopularJobs (){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Popular Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.jobList}>
                {jobs.map(job => (
                    <View key={job.id} style={styles.jobSection}>
                        <Image source={job.icon} style={styles.icon} />
                        <View style={styles.details}>
                            <Text style={styles.title}>{job.title}</Text>
                            <Text style={styles.salary}>{job.salary}</Text>
                            <Text style={styles.company}>{job.company}</Text>
                            <Text style={styles.location}>{job.location}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 0,
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
        width: 105,
        height: 21,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
      
    seeAll: {
        width: 42,
        height: 21,
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
        lineHeight: 20.8,
    },

    jobList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        top: 40
    },

    jobSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 380,
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 74,
        bottom: 20,
    },
    
    details: {
        flexDirection: 'column',
        flex: 1,
    },

    icon: {
        marginRight: 20,
    },
    
    title: {
        width: 200,
        height: 18,
        fontSize: 14,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 18.2,
        top: 18,
    },
      
    salary: {
        width: 90,
        height: 19,
        left: 180,
        fontSize: 12,
        fontWeight: '400',
        color: '#0D0D26',
        bottom: 3,
        lineHeight: 19.2,
        textAlign: 'right'
    },
      
    company: {
        width: 74,
        height: 21,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
      
    location: {
        width: 150,
        height: 21,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
        left: 120,
        textAlign: 'right',
        bottom: 20,
    },
});
    

export default PopularJobs;