import React, { useEffect, useState } from "react";
import "./OfflineContents.css";
import CoursesCards from "../../../../common/components/coursesCards/CoursesCard";
import ScreenHeader from "../../../../common/components/screenHeader/ScreenHeader";
import ScreenTab from "../../../../common/components/screentab/ScreenTab";

export default function OfflineContents() {
  const [offlineCourses, setOfflineCourses] = useState([]);

  useEffect(() => {
    const fetchOfflineCourses = async () => {
      const cache = await caches.open("courses-offline-cache");
      const cachedRequests = await cache.keys();
      const cachedCourses = await Promise.all(
        cachedRequests.map(async (request) => {
          const response = await cache.match(request);
          return response.json(); // Assuming the response is JSON
        })
      );
      setOfflineCourses(cachedCourses);
    };

    fetchOfflineCourses();
  }, []);

  const handleDownload = async (course) => {
    const cache = await caches.open("courses-offline-cache");
    await cache.add(new Request(`/api/courses/${course._id}`));
    setOfflineCourses([...offlineCourses, course]);
  };

  const handleRemoveDownload = async (course) => {
    const cache = await caches.open("courses-offline-cache");
    const cacheKeys = await cache.keys();

    const courseRequest = cacheKeys.find((request) =>
      request.url.includes(course._id)
    );

    if (courseRequest) {
      await cache.delete(courseRequest);
      setOfflineCourses(offlineCourses.filter((c) => c._id !== course._id));
    }
  };

  return (
    <div className="offline-contents">
      <ScreenHeader title={"Offline Contents"} />
      <ScreenTab
        tabs={["All", "English", "Biology", "Kiswahili", "Chemistry"]}
      />
      <div className="offline-cards row">
        {offlineCourses.length === 0 ? (
          <p>No offline courses available</p>
        ) : (
          offlineCourses.map((course) => (
            <CoursesCards
              key={course._id}
              course={course}
              onDownload={handleDownload}
              onRemoveDownload={handleRemoveDownload}
              isDownloaded={offlineCourses.some((c) => c._id === course._id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
