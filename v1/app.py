"""
Main application file
"""

from pathlib import Path

import streamlit as st
import yaml


def main():
    """
    Main function of the application
    """

    current_dir = Path(__file__).parent.resolve()
    root_dir = current_dir.parent
    content_dir = root_dir / "content"

    with open(content_dir / "info.yaml", "r") as f:
        info = yaml.safe_load(f)

    # Tên và Hình đại diện
    st.markdown(
        """
        <style>
        .circle-img {
            border-radius: 50%;
            width: 150px; /* Adjust the size as needed */
            height: 150px; /* Adjust the size as needed */
            object-fit: cover;
        }
        </style>
        """,
        unsafe_allow_html=True
    )

    st.markdown(
        """
        <img src="https://i.pinimg.com/736x/00/09/61/00096103a6267557769f8266cdc5cd3d.jpg" class="circle-img">
        """,
        unsafe_allow_html=True
    )
    st.title("Trương Tuấn Anh")

    # Kỹ năng cá nhân (Ngôn ngữ lập trình, Framework, Công cụ và Kỹ năng mềm)
    st.header("Kỹ năng cá nhân")
    skills = info.get("skills", [])
    converted_skills = {}
    for skill in skills:
        # st.write(f"- {skill.get('name', '')}: {skill.get('level', '')}")

        skill_group = skill.get("group", "")
        if skill_group not in converted_skills:
            converted_skills[skill_group] = []
        converted_skills[skill_group].append(skill)

    for skill_group, skill_list in converted_skills.items():
        st.subheader(skill_group)
        for skill in skill_list:
            st.write(f"- {skill.get('name', '')}: `{skill.get('level', '')}`")

    # Các dự án đã làm
    st.header("Các dự án đã làm")
    projects = info.get("projects", [])
    for project in projects:
        technologies = project.get("technologies", [])
        technologies = [f"`{tech}`" for tech in technologies]
        technologies = " ".join(technologies)

        st.write(f"- **{project.get('name', '')}**: {project.get('description', '')}"
                 f"{technologies}")

    # Học vấn cá nhân
    st.header("Học vấn cá nhân")
    education = info.get("education", [])
    for edu in education:
        st.write(f"- {edu.get('name', '')}: `{edu.get('start_date', '')} - {edu.get('end_date', '')}`")

        # Generate tags for each education by its major
        field = edu.get("field", "")
        pass

    # Các sản phẩm cá nhân khác (Blog, Youtube, Github, ...)
    st.header("Các sản phẩm cá nhân khác")
    products = info.get("outstanding_products", [])
    # 1. Blog: Các bài viết nổi bật
    blogs = products.get("blogs", [])
    # 2. Youtube: Các video nổi bật
    videos = products.get("videos", [])
    # 3. Github: Các repository nổi bật
    repos = products.get("repositories", [])

    st.header("Định hướng phát triển cá nhân")
    # Định hướng phát triển cá nhân: Muốn học thêm công nghệ gì, hoặc muốn tham gia vào loại dự án nào
    future_orientation = info.get("future_orientation", "")
    st.write(f"- {future_orientation}")

    st.header("Thông tin liên hệ")
    # Thông tin liên hệ: Email, Số điện thoại, ...
    contacts = info.get("contacts", )
    for contact in contacts:
        if contact.get("value", ""):
            st.write(f"- {contact.get('type', '')}: {contact.get('value', '')}")

    # Nhận xét của người khác (Đồng nghiệp, sếp, bạn bè, ...)
    st.header("Nhận xét")
    reviews = info.get("reviews", [])
    for review in reviews:
        st.write(f"- {review.get('name', '')}: {review.get('review', '')}")


if __name__ == "__main__":
    main()
