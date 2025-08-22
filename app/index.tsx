import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MiAmorApp() {
  const handleTelegramLink = () => {
    Linking.openURL('https://t.me/m/k3I7eDZgNWZk');
  };

  const EarningsCard = ({ 
    title, 
    value, 
    icon, 
    color 
  }: {
    title: string;
    value: string;
    icon: string;
    color: string;
  }) => (
    <View style={[styles.earningsCard, { borderColor: color }]}>
      <LinearGradient
        colors={[`${color}20`, `${color}10`]}
        style={styles.earningsCardGradient}
      >
        <View style={styles.earningsCardHeader}>
          <Text style={[styles.earningsCardTitle, { color }]}>{title}</Text>
          <Ionicons name={icon as any} size={20} color={color} />
        </View>
        <Text style={[styles.earningsCardValue, { color }]}>{value}</Text>
        <View style={[styles.heartIcon, { backgroundColor: color }]}>
          <Ionicons name="heart" size={12} color="white" />
        </View>
      </LinearGradient>
    </View>
  );

  const FeatureCard = ({ 
    title, 
    status, 
    color 
  }: {
    title: string;
    status: string;
    color: string;
  }) => (
    <View style={[styles.featureCard, { borderColor: color }]}>
      <LinearGradient
        colors={[`${color}15`, `${color}05`]}
        style={styles.featureCardGradient}
      >
        <Text style={styles.featureCardTitle}>{title}</Text>
        <View style={styles.featureCardStatus}>
          <Text style={[styles.featureCardStatusText, { color }]}>{status}</Text>
          <View style={[styles.featureCardBadge, { backgroundColor: color }]}>
            <Text style={styles.featureCardBadgeText}>100</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );

  const ultraData = [
    { title: 'Access Fee/Signup Fee', value: '₦14,000', icon: 'card' },
    { title: 'Onboarding Gift', value: '₦12,500', icon: 'gift' },
    { title: 'Connection Commission/REF', value: '₦12,500', icon: 'link' },
    { title: '1st Level Spillover', value: '₦400', icon: 'trending-up' },
    { title: '2nd Level Spillover', value: '₦150', icon: 'trending-up' },
    { title: 'Game modules', value: '₦5,000 daily', icon: 'game-controller' },
    { title: 'Matching ads-on', value: '₦2,500 daily', icon: 'heart' },
    { title: 'Open love hamper', value: '₦10,000', icon: 'gift-outline' },
    { title: 'TikTok/fb lovers share', value: '₦2,500 per 5k views', icon: 'share-social' },
  ];

  const plusData = [
    { title: 'Access Fee/Signup Fee', value: '₦10,000', icon: 'card' },
    { title: 'Onboarding Gift', value: '₦8,000', icon: 'gift' },
    { title: 'Connection Commission/REF', value: '₦9,100', icon: 'link' },
    { title: '1st Level Spillover', value: '₦200', icon: 'trending-up' },
    { title: '2nd Level Spillover', value: '₦100', icon: 'trending-up' },
    { title: 'Game modules', value: '₦3,000 daily', icon: 'game-controller' },
    { title: 'Matching ads-on', value: '₦2,000 daily', icon: 'heart' },
    { title: 'Open love hamper', value: '₦5,000', icon: 'gift-outline' },
    { title: 'TikTok/fb lovers share', value: '₦2,500 per 5k views', icon: 'share-social' },
  ];

  const features = [
    { title: 'INCENTIVES', status: 'FULLY DEPLOYED' },
    { title: 'MARATHON CONTEST', status: 'FULLY DEPLOYED' },
    { title: 'COUPLES CHALLENGE', status: 'FULLY DEPLOYED' },
    { title: 'SKILLS LAB', status: 'FULLY DEPLOYED' },
    { title: 'COUPLES TRIP', status: 'FULLY DEPLOYED' },
    { title: 'LOVE HAMPER', status: 'FULLY DEPLOYED' },
    { title: 'SELL IT SECTOR', status: 'FULLY DEPLOYED' },
    { title: 'AUTOMATED WITHDRAWALS', status: 'FULLY DEPLOYED' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a1a" />
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1500771967326-9b2f6200d1c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(10, 10, 26, 0.85)', 'rgba(26, 26, 58, 0.8)', 'rgba(42, 42, 90, 0.75)']}
          style={styles.background}
        >
          <ScrollView 
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <Image 
                  source={require('../assets/images/miamor.jpg')}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.tagline}>Find Love, Earn Income</Text>
            </View>

            {/* MiAmor Ultra Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Earnings Framework</Text>
                <Text style={[styles.sectionSubtitle, { color: '#4ecdc4' }]}>MiAmor Ultra</Text>
              </View>
              
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  ✅Miamor is an online initiatives that allows you make massive income while getting matched with someone who can be your life partner.
                </Text>
                <Text style={styles.descriptionText}>
                  ✅Whether you&apos;re seeking for a new love or looking to save your relationship, Miamor is the one for you
                </Text>
              </View>

              <View style={styles.earningsGrid}>
                {ultraData.map((item, index) => (
                  <EarningsCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                    color="#4ecdc4"
                  />
                ))}
              </View>

              <View style={styles.matchesInfo}>
                <Text style={[styles.matchesText, { color: '#4ecdc4' }]}>
                  NUMBER OF LOVE PARTNER MATCHES: 5 PER WEEK ✅
                </Text>
              </View>

              <View style={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    status={feature.status}
                    color="#4ecdc4"
                  />
                ))}
              </View>
            </View>

            {/* MiAmor Plus Section */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Earnings Framework</Text>
                <Text style={[styles.sectionSubtitle, { color: '#ff6b6b' }]}>MiAmor Plus</Text>
              </View>
              
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                  ✅Miamor is an online initiatives that allows you make massive income while getting matched with someone who can be your life partner.
                </Text>
                <Text style={styles.descriptionText}>
                  ✅Whether you&apos;re seeking for a new love or looking to save your relationship, Miamor is the one for you
                </Text>
              </View>

              <View style={styles.earningsGrid}>
                {plusData.map((item, index) => (
                  <EarningsCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                    color="#ff6b6b"
                  />
                ))}
              </View>

              <View style={styles.matchesInfo}>
                <Text style={[styles.matchesText, { color: '#ff6b6b' }]}>
                  NUMBER OF LOVE PARTNER MATCHES: 2 PER WEEK ✅
                </Text>
              </View>

              <View style={styles.featuresGrid}>
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    title={feature.title}
                    status={feature.status}
                    color="#ff6b6b"
                  />
                ))}
              </View>
            </View>

            {/* Contact Section */}
            <View style={styles.contactSection}>
              <TouchableOpacity style={styles.contactButton} onPress={handleTelegramLink}>
                <Ionicons name="rocket" size={24} color="white" />
                <Text style={styles.contactButtonText}>Get Started</Text>
              </TouchableOpacity>
            </View>

            {/* Bottom Heart */}
            <View style={styles.bottomHeart}>
              <View style={styles.heartCircle}>
                <Ionicons name="heart" size={40} color="#ff6b6b" />
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 50,
  },
  logoImage: {
    width: 150,
    height: 75,
    marginBottom: 10,
    borderRadius: 37.5,
  },
  tagline: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  descriptionText: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  earningsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  earningsCard: {
    width: (width - 60) / 3,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 15,
    overflow: 'hidden',
  },
  earningsCardGradient: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  earningsCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  earningsCardTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 5,
  },
  earningsCardValue: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchesInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  matchesText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  featuresGrid: {
    gap: 12,
  },
  featureCard: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  featureCardGradient: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  featureCardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureCardStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  featureCardBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureCardBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  contactSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contactButton: {
    backgroundColor: '#4ecdc4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 20,
    gap: 12,
    shadowColor: '#4ecdc4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomHeart: {
    alignItems: 'center',
    marginTop: 40,
    position: 'relative',
  },
  heartGlow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff6b6b',
    opacity: 0.2,
    shadowColor: '#ff6b6b',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 10,
  },
  heartCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ff6b6b',
  },
});
