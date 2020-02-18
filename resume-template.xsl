<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
	<xsl:output method="xml" indent="yes" encoding="UTF-8"/>
	<xsl:variable name="bgimg" select="logo"/>
	<xsl:template match="/resume">
		<html>
			<head>
				<title></title>
				<link href="./styles.css" rel="stylesheet"/>
				<style>
					body{
						display: flex;
						justify-content: center;
						background: url("./background3.jpg") no-repeat center center / cover;
						background-size: cover;
						color: white;
						display: flex;
						justify-content: center;
						font-size: 12px;
					}
				</style>
			</head>
			<body id="resume-body">
				<div class="container">
					<div class="side-bar">
						<xsl:for-each select="contact">
							<div id="logo-element" class="side-element">
								<div id="logo">
									<img width="50%" height="100%">
										<xsl:attribute name="src">
											<xsl:value-of select="logo" />
										</xsl:attribute>
									</img>
								</div>
							</div>
							<div class="side-element fullname">
								<h1>
									<xsl:value-of select="firstname"/>
									<xsl:value-of select="lastname" />
								</h1>
							</div>
							<div class="side-element">
								<h3 class="side-headers">About me</h3>
								<div><xsl:value-of select="aboutme" /> </div>
							</div>
							<div class="side-element">
								<h3 class="side-headers">Contact</h3>
								<ul>
									<li>www.asmfaof.com</li>
									<li>address</li>
									<li>phone</li>
									<li>email</li>
								</ul>
							</div>
						</xsl:for-each>
						<xsl:for-each select="skills">
							<xsl:for-each select="skill">
								<div class="side-element">
									<h3 class="side-headers"><xsl:value-of select="@skilltype" /></h3>
									<xsl:for-each select="skillset">
										<div class="skills-table">
											<div class="skillname"><xsl:value-of select="skillname" /></div>
											<div class="skillprogress">
												<div>
													<xsl:attribute name="style">
														width: <xsl:value-of select="skillprogress" />;
													</xsl:attribute>
													<xsl:value-of select="skillprogress" />
												</div>
											</div>
										</div>
									</xsl:for-each>
								</div>
							</xsl:for-each>
						</xsl:for-each>
					</div>
					<div class="experience">
						<h1>Experience</h1>
						<xsl:for-each select="projects">
							<div class="formal-exp">
								<h3 class="header-exp"><xsl:value-of select="projectsheader" /></h3>
								<xsl:for-each select="project">
									<div class="data-exp">
										<div class="year-exp"><xsl:value-of select="projectdate" /></div>
										<div class="details-exp">
											<div class="detail-exp"><xsl:value-of select="projectname" /></div>
											<div class="detail-exp"><xsl:value-of select="projectdescription" /></div>
											<div class="detail-exp">
												<a>
													<xsl:attribute name="href">
														<xsl:value-of select="projectlink" />
													</xsl:attribute>
													Project Link
												</a>
											</div>
										</div>
									</div>
								</xsl:for-each>
							</div>
						</xsl:for-each>
						<xsl:for-each select="hobbies">
							<div id="hobbies-exp">
								<h1>Hobbies</h1>
								<ul>
									<xsl:for-each select="hobby">
										<li><xsl:value-of select="hobbyname"/></li>
									</xsl:for-each>
								</ul>
							</div>
						</xsl:for-each>
					</div>
				</div>
				<div class="home-nav">
					<div class="home-links home-links-cv">
						<div><a href="./index.html">Home page</a></div>
						<div><a href="./gallery.html">Gallery</a></div>
						<div><a href="./skills.html">Skills</a></div>
						<div><a href="./projects.html">Projects</a></div>
						<div id="nav-cv"><a href="./cv">Curriculum Vitae</a></div>
						<div><a href="./comments.html">Comments</a></div>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>