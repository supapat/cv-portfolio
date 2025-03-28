'use client';

import ArchitectureIcon from '@mui/icons-material/Architecture';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { RefObject } from 'react';

// Define color scheme
const colors = {
  primary: '#3f51b5', // Indigo
  primaryLight: '#757de8',
  primaryDark: '#002984',
  secondary: '#f5f5f5', // Light gray
  secondaryLight: '#ffffff',
  secondaryDark: '#c2c2c2',
  text: '#212121',
  textLight: '#484848',
  white: '#ffffff',
  accent: '#ff4081' // Pink accent
};

interface ProjectsSectionProps {
  projectsRef: RefObject<HTMLDivElement | null>;
}

export default function ProjectsSection({ projectsRef }: ProjectsSectionProps) {
  return (
    <Box 
      ref={projectsRef}
      sx={{ p: 5, bgcolor: colors.white }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <ArchitectureIcon sx={{ color: colors.primary, mr: 1, fontSize: 32 }} />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.primary }}>
          Projects
        </Typography>
      </Box>
      
      <Grid container spacing={4}>
        {/* Project 1 - Insurance Quote System */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
             Insurance Quote System
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Sep. 2023 - Feb. 2024 | Bindzer Tech Co., Ltd
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project12.jpg" 
                  alt="Insurance Quote System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
                <Avatar 
                  src="/images/project13.jpg" 
                  alt="Insurance Quote System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    TQR Public Company Limited, a publicly traded company, requires robust and scalable web systems to support its diverse business operations. The company recognizes the importance of a strong online presence and efficient web-based tools for both internal and external stakeholders. The current development scope focuses on leveraging modern technologies like React, NestJS, and MySQL to create and enhance web systems that align with the company&apos;s strategic goals. The company seeks to improve user experience, optimize search engine visibility, and ensure seamless data management across its platforms.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of this web system development project are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Develop Web Systems</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create web applications that accurately reflect the UX/UI designs and system requirements provided by the company&apos;s analysts
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Enhance SEO</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Improve the website&apos;s visibility and organic traffic by optimizing content and technical elements for search engines
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>System Performance</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Develop web systems that are capable of handling high traffic volumes and can be easily scaled to accommodate future growth
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  The scope includes developing web systems as assigned, providing web development consultancy, improving SEO, and utilizing React for front-end, NestJS for back-end, and MySQL for database management.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        React
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          MUI
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          JavaScript
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        NestJS
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          MySQL Database
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Development Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Docker
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Nginx
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Jenkins
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        NPM
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 2 - Mobile News */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Engagement and Advertising
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              May. 2020 - Feb. 2021 | Thathrit Co., Ltd.
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project5.jpg" 
                  alt="Mobile News System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    The company is a dynamic startup seeking to establish its online presence through the development of a proprietary website. Recognizing the burgeoning landscape of digital marketing and advertising, the concept is to create a comprehensive platform that amalgamates insights, analyses, and promotional content related to leading global brands, products, and companies. This website aims to be a hub for industry professionals and enthusiasts, fostering engagement through interactive polls and up-to-date information. In today&apos;s competitive digital sphere, a robust online presence is crucial, and this website will serve as a pivotal tool for brand building and market penetration.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of this website development project are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Establish Online Presence</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create a digital platform that effectively represents the startup in the advertising and online marketing sector
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Drive User Engagement</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Implement interactive features like polls to keep users actively involved and foster a sense of community
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Provide Industry Insights</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Offer in-depth analyses and information about leading global brands, positioning the website as a go-to resource
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Additional objectives include enhancing SEO performance with Nuxt.js, developing a scalable Laravel backend, creating a platform for brand collaboration, and establishing a valuable marketing tool.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Nuxt.Js (Vue.Js Framework)
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          BootstrapVue
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Vuetify.Js
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          JavaScript
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Laravel (PHP)
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          MySQL Database
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Development Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Docker
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Nginx
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Jenkins
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        NPM
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 3 - Property Marketplace */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Marketplace to buy, rent and sell property
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Mar. 2020 - Jan. 2021 | Thathrit Co., Ltd.
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project10.jpg" 
                  alt="Vehicle Inspection System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
                 <Avatar 
                  src="/images/project11.jpg" 
                  alt="Vehicle Inspection System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    The current system for managing commercial services, particularly those related to vehicle inspections and driver data, is often fragmented and inefficient. Customers and staff face challenges in accessing and managing information, leading to delays and potential errors. This lack of a unified, user-friendly platform hinders operational efficiency and customer satisfaction. The development of a centralized, web-based service portal is crucial to streamline these processes. This system will empower customers to independently access and manage services while providing staff with robust tools to effectively handle data related to vehicle inspections and driver information.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of developing this commercial service system are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Enhance Customer Self-Service</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Provide customers with a user-friendly web portal to access and manage vehicle inspection and driver data services
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Streamline Data Management</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Equip staff with efficient tools for managing, tracking, and updating vehicle inspection and driver data
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Improve Data Accessibility</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create a centralized database ensuring data accuracy and easy accessibility for both customers and staff
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Additional objectives include automating processes, increasing operational efficiency, enhancing reporting and analytics, improving customer satisfaction, ensuring system scalability and security, and modernizing the current system.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        HTML
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        CSS
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Blazor
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Bootstrap 4
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        C# ASP.NET Core
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 4 - Cleantrack GPS */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              CLEANTRACK GPS
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Apr. 2020 - Aug. 2020 | Powermatic Co. Ltd
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project6.jpg" 
                  alt="Cleantrack GPS" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    The organization currently operates with an outdated system that provides customers with self-service access to various services through a web browser, essentially functioning as a service portal. This system also includes tools for staff to manage, track, and generate reports on these services. However, the existing system suffers from limitations in its reporting capabilities, specifically in the creation and export of data into Excel format. This deficiency hinders efficient data analysis and reporting, impacting both customer service and internal operational workflows. The current project focuses on addressing these shortcomings through editing, developing, and enhancing the reporting functionality, with a key objective being the implementation of a new Excel report generation feature.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of this project are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Enhance Self-Service</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Improve the existing web-based service portal for customers to efficiently access and utilize services
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Improve Reporting</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Enhance the system&apos;s reporting capabilities for accurate and timely analysis and decision-making
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Excel Report Generation</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Develop a new feature for creating and exporting reports in Excel format for better data manipulation
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Additional objectives include streamlining staff efficiency, increasing data accessibility, modernizing system infrastructure, and reducing manual reporting efforts through automation.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        HTML
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        CSS
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        JavaScript
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          jQuery
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Ajax
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Bootstrap
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        C# ASP.NET Core
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 5 - Application for Taxi Drivers to Test Vehicle Equipment for Licensing/Renewal */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Application for Taxi Drivers to Test Vehicle Equipment for Licensing/Renewal
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              Apr. 2020 - Aug. 2020 | Powermatic Co. Ltd
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
                mb: 3,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                padding: 2,
                bgcolor: 'rgba(0,0,0,0.02)'
              }}>
                <Box sx={{
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}>
                  <Avatar 
                    src="/images/project8.jpg" 
                    alt="Taxi Driver Application - Screen 1" 
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: 300,
                      borderRadius: '8px'
                    }}
                  />
                </Box>
                <Box sx={{
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}>
                  <Avatar 
                    src="/images/project7.jpg" 
                    alt="Taxi Driver Application - Screen 2" 
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: 300,
                      borderRadius: '8px'
                    }}
                  />
                </Box>
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    The current process for taxi drivers to obtain or renew their licenses involves manual inspections and paperwork, which can be time-consuming, inefficient, and prone to errors. This process often leads to delays, inconvenience for drivers, and potential safety concerns due to the lack of real-time data on vehicle equipment functionality. To address these issues, there&apos;s a need for a streamlined, digital solution that allows drivers to self-assess their vehicle equipment and submit the results for licensing purposes. This application aims to modernize the licensing process by providing a user-friendly, efficient, and accurate method for drivers to test and report on the condition of their vehicles.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of developing this application are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Streamline Licensing</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Reduce time and effort required for taxi drivers to obtain or renew licenses by automating testing
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Enhance Vehicle Safety</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Promote safety by enabling drivers to regularly test and verify the operational status of equipment
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Flexible Connectivity</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Develop Bluetooth/Wi-Fi and Internet versions to accommodate various connectivity scenarios
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Additional objectives include improving efficiency and accuracy, providing real-time data, reducing administrative burden, improving user experience, and increasing transparency through digital records.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Mobile Development
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Android Studio
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Java
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 6 - ERP Systems */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Enterprise Resource Planning (ERP) Systems
            </Typography>
            
            {/* ERP Project 1 */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2, 
                textAlign: 'center' 
              }}>
                RAJAMANGALA UNIVERSITY OF TECHNOLOGY TAWAN-OK
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                color: colors.textLight, 
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
               Jan. 2019 - Feb. 2020 | Zawanna Technology Co., Ltd.
              </Typography>
            
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project2.jpg" 
                  alt="ERP System - RAJAMANGALA" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* ERP Project 2 */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2, 
                textAlign: 'center' 
              }}>
                SRISAVARINDHIRA THAI RED CROSS INSTITUTE OF NURSING
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                color: colors.textLight, 
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                Jan. 2019 - Feb. 2020 | Zawanna Technology Co., Ltd.
              </Typography>
            
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project4.jpg" 
                  alt="ERP System - THAI RED CROSS" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* ERP Project 3 */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2, 
                textAlign: 'center' 
              }}>
                THE THAI BAR UNDER THE ROYAL PATRONAGE
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 3, 
                color: colors.textLight, 
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                Jan. 2020 - Feb. 2020| Zawanna Technology Co., Ltd.
              </Typography>
            
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project3.jpg" 
                  alt="ERP System - THAI BAR" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    In an era of intense and rapidly changing business competition, resource management is paramount to maintaining competitiveness. Enterprise Resource Planning (ERP) systems were developed to assist organizations in coordinating and managing all resources, including capital, human resources, inventory, production, and distribution. Historically, organizations often used disparate systems, leading to data management chaos and reduced operational efficiency. ERP systems aim to integrate these various systems into a unified whole, creating greater operational efficiency, reducing data redundancy, and promoting better decision-making from accurate and comprehensive data.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of implementing an ERP system are as follows:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  {/* First row of objectives */}
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Enhance Operational Efficiency</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        ERP systems streamline and flexibilize internal organizational processes, reducing operational time and costs.
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Improve Data Visibility</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Provide business owners and executives with accurate and accessible data anytime, anywhere, for effective decision-making.
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Efficient Resource Management</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Reduce resource wastage and enhance resource utilization through precise planning in managing people, materials, and production.
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* Second row of objectives */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Data Integration</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create a centralized and systematic database, enabling data from various departments to be shared, reducing the risk of inaccurate or conflicting information.
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Support Future Growth</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        ERP systems are scalable to meet the needs of growing organizations, enabling them to adapt quickly to market changes.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Effective ERP system planning and development will enable organizations to compete in a rapidly changing market and respond to customer needs quickly and efficiently.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Vue.Js Framework
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Bootstrap 4
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          JavaScript
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Laravel (php)
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Postgresql Database
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        NPM
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 7 - Mobile News */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Engagement and Advertising
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              May. 2020 - Feb. 2021 | Thathrit Co., Ltd.
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project5.jpg" 
                  alt="Mobile News System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    The company is a dynamic startup seeking to establish its online presence through the development of a proprietary website. Recognizing the burgeoning landscape of digital marketing and advertising, the concept is to create a comprehensive platform that amalgamates insights, analyses, and promotional content related to leading global brands, products, and companies. This website aims to be a hub for industry professionals and enthusiasts, fostering engagement through interactive polls and up-to-date information. In today&apos;s competitive digital sphere, a robust online presence is crucial, and this website will serve as a pivotal tool for brand building and market penetration.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of this website development project are:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Establish Online Presence</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create a digital platform that effectively represents the startup in the advertising and online marketing sector
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Drive User Engagement</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Implement interactive features like polls to keep users actively involved and foster a sense of community
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Provide Industry Insights</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Offer in-depth analyses and information about leading global brands, positioning the website as a go-to resource
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  Additional objectives include enhancing SEO performance with Nuxt.js, developing a scalable Laravel backend, creating a platform for brand collaboration, and establishing a valuable marketing tool.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Nuxt.Js (Vue.Js Framework)
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          BootstrapVue
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Vuetify.Js
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          JavaScript
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Laravel (PHP)
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          MySQL Database
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Development Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Docker
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Nginx
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Jenkins
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        NPM
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Project 8 - ERP System */}
        <Grid item xs={12}>
          <Box sx={{ 
            mb: 4, 
            p: 4, 
            borderRadius: 2, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            bgcolor: colors.secondaryLight
          }}>
            <Typography variant="h5" sx={{ 
              fontWeight: 'bold', 
              color: colors.primary, 
              mb: 2, 
              textAlign: 'center',
              borderBottom: `2px solid ${colors.primaryLight}`,
              pb: 1
            }}>
              Online service system (e-Service) - Thailand Institute of Nuclear Technology (Public Organization)
            </Typography>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: colors.textLight, 
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              May 2018 - Jan 2019 | Zawanna Technology Co., Ltd.
            </Typography>
           
            
            <Box sx={{ mb: 4 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 3,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <Avatar 
                  src="/images/project1.jpg" 
                  alt="ERP System" 
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: 800,
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
            
            {/* Project description */}
            <Box sx={{ 
              mb: 3, 
              p: 2, 
              bgcolor: colors.white, 
              borderRadius: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                color: colors.primary, 
                mb: 2 
              }}>
                Project Overview
              </Typography>
              
              {/* Background Section */}
              <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Background
                </Typography>
                <Box sx={{
                  p: 2,
                  bgcolor: colors.primaryLight,
                  borderRadius: 2,
                  border: `1px solid ${colors.primaryLight}`,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                  <Typography variant="body2" sx={{ color: colors.text, pl: 1 }}>
                    Currently, Thailand is having a policy to develop the economy and society towards the digital age. Government agencies will be transformed into Digital Government, so government agencies need to increase service efficiency to be faster, more convenient and improve quality to meet the needs of users.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1.5, color: colors.text, pl: 1 }}>
                    So that people can access services by themselves (Self-Service) through online channels from computer or portable devices (Smart Devices), such as Smart Phones and Tablets, etc., by improving the services, such as repairing radiological equipment, radiation meter calibration services, radiography equipment inspection services. and analytical measurement services of the Institute.
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1.5, color: colors.text, pl: 1 }}>
                    The Institute of Nuclear Technology recognizes the importance of upgrading such services. Therefore, a project to develop a nuclear technology service system was established. To support the service of Smart Service for the people to be convenient to receive the service. Reduce costs and time to contact government agencies and can track the service status easily and quickly.
                  </Typography>
                </Box>
              </Box>

              {/* Objectives Section */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold', 
                  color: colors.primaryDark, 
                  mb: 1,
                  borderLeft: `4px solid ${colors.primary}`,
                  pl: 1.5
                }}>
                  Objectives
                </Typography>
                <Typography variant="body2" sx={{ 
                  mb: 2, 
                  color: colors.text, 
                  pl: 2,
                  bgcolor: colors.secondary,
                  p: 1.5,
                  borderRadius: 1
                }}>
                  The primary objectives of this online service system are as follows:
                </Typography>
                
                <Grid container spacing={2} sx={{ pl: 1, pr: 1, mt: 0 }}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Self-Service Portal</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Develop a platform for customers to access various services on their own through a web browser
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.secondary, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>Back Office Management</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Provide tools for institutional staff to efficiently manage and deliver various services
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: colors.primaryLight, 
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 5px 8px rgba(0,0,0,0.15)'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.text, 
                        fontWeight: 'medium',
                        textAlign: 'center'
                      }}>
                        <strong>One-Stop Service</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: colors.text,
                        mt: 1,
                        textAlign: 'center'
                      }}>
                        Create a unified platform for requesting quotes, ordering services, tracking job status, and receiving reports
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Typography variant="body2" sx={{ 
                  mt: 3, 
                  color: colors.text, 
                  pl: 2, 
                  fontStyle: 'italic',
                  textAlign: 'center',
                  borderTop: `1px dashed ${colors.primaryLight}`,
                  pt: 2
                }}>
                  The online service system aims to transform government services into Digital Government, improving efficiency and accessibility for all users.
                </Typography>
              </Box>
            </Box>
            
            {/* Technologies used */}
            <Box sx={{ 
              p: 3, 
              bgcolor: colors.primaryDark, 
              borderRadius: 2,
              color: colors.white,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 3, 
                textAlign: 'center',
                color: colors.white,
                borderBottom: `2px solid ${colors.secondaryLight}`,
                pb: 1
              }}>
                LANGUAGES, FRAMEWORK AND TOOLS
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {/* Front-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Front-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        Razor Pages Asp.net Core
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Bootstrap 4
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          JavaScript
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          jQuery
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Ajax
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Back-end */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Back-end
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        C# Asp.net core 2
                      </Typography>
                      <Box sx={{ pl: 3 }}>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          OAuth 2 for authentication
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: colors.white,
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1
                        }}>
                          <Box component="span" sx={{ 
                            width: 6, 
                            height: 6, 
                            bgcolor: colors.white, 
                            borderRadius: '50%',
                            display: 'inline-block',
                            mr: 1.5,
                            opacity: 0.7
                          }}></Box>
                          Postgresql Database
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* Tools */}
                <Grid item xs={12} md={4}>
                  <Box sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    p: 2, 
                    borderRadius: 2,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <Typography variant="subtitle1" sx={{ 
                      fontWeight: 'bold', 
                      color: colors.secondaryLight,
                      mb: 2,
                      textAlign: 'center',
                      borderBottom: `1px solid ${colors.secondaryLight}`,
                      pb: 1
                    }}>
                      Development Tools
                    </Typography>
                    <Box sx={{ pl: 2 }}>
                      <Typography variant="body2" sx={{ 
                        color: colors.white,
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1.5
                      }}>
                        <Box component="span" sx={{ 
                          width: 8, 
                          height: 8, 
                          bgcolor: colors.secondaryLight, 
                          borderRadius: '50%',
                          display: 'inline-block',
                          mr: 1.5
                        }}></Box>
                        GitLab Source Control
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
